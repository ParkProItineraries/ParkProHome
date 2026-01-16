# Minor Polish Patch (Owner-only + More Events)
**Date:** January 12, 2026  
**Patch:** Phase 1 Polish Pass

---

## Summary

Applied a small, safe polish pass to address remaining minor issues from Phase 1 fixes:

1. ✅ Owner-only enforcement for Admin Log (backend + frontend)
2. ✅ Added 3 additional high-value audit events
3. ✅ Improved 402 error messages for itinerary limit exceeded
4. ✅ Fixed minor documentation wording bug

---

## Files Changed

### Backend (ParkProBackend/)

1. **utils/auditLogger.js** (NEW)
   - Created helper function `logAuditEvent()` that automatically derives `agency_id` from `tripId`
   - Includes throttling for client view events (10 minutes per trip)
   - Best-effort logging that never fails the main request

2. **controllers/itineraryController.js**
   - Added audit logging for `itinerary_edited` in:
     - `updateSection()` - Single section edit
     - `bulkUpdateItinerary()` - Bulk section edits
     - `revertEdit()` - Edit revert
   - Improved 402 error message for public questionnaire route:
     - Changed from: "Monthly itinerary limit reached (X/Y). Please contact your travel agent to upgrade your plan."
     - Changed to: "This agency has reached its monthly itinerary limit. Please contact your travel agent."

3. **routes/chat.js**
   - Added audit logging for `client_message_sent` when agent sends a message
   - Only logs agent-sent messages (not client messages)

4. **routes/public/clientItinerary.js**
   - Added audit logging for `itinerary_viewed_by_client` when client views itinerary
   - Throttled to once per 10 minutes per trip (prevents spam logging)
   - Logs with `userId: null` and `metadata: { viewer: 'client_portal' }`

5. **middleware/billingMiddleware.js**
   - Improved 402 error message for authenticated agent route:
     - Changed from: "You have reached your monthly limit of X itineraries. Please upgrade your plan to continue."
     - Changed to: "Your agency has reached its monthly itinerary limit. Please upgrade your plan or add extra itineraries."

6. **routes/agency-admin/agencyDashboardRoutes.js**
   - Already protected by `requireRole('agentAdmin', 'parkProAdmin')` (no changes needed)
   - Verified owner-only enforcement is in place

### Frontend (ParkProUI/)

1. **pages/agency-admin/ActivityLog.jsx**
   - Added explicit redirect for non-owners
   - Redirects to `/agent/dashboard` if user doesn't have admin access

### Documentation

1. **AUDITS/PARKPRO_PHASE1_FIX_IMPLEMENTATION_REPORT.md**
   - Updated date to January 12, 2026
   - Fixed wording: "check network tab for SQL" → "check network tab for request payloads and response codes"

---

## How to Test

### 1. Owner-only Enforcement for Admin Log

**Backend Test:**
1. Login as non-owner agent (role: `agentUser`)
2. Attempt to access `/api/agency-admin/activity-log`
3. Expected: 403 Forbidden with message "Insufficient permissions"

**Frontend Test:**
1. Login as non-owner agent
2. Navigate to `/agent/admin/activity-log` (or click link if visible)
3. Expected: Redirected to `/agent/dashboard`

**Owner Test:**
1. Login as agency owner (role: `agentAdmin` or `parkProAdmin`)
2. Navigate to Admin → Activity Log
3. Expected: Activity Log page loads successfully

---

### 2. Audit Event: itinerary_edited

**Test Single Section Edit:**
1. Login as agent
2. View itinerary
3. Edit a section (morning, afternoon, notes, etc.)
4. Save changes
5. Check Admin Log (as owner)
6. Expected: See `itinerary_edited` event with metadata:
   - `dayIndex`: Day number
   - `section`: Section name
   - `editNotes`: Any notes (if provided)
   - `agencyId`: Agency ID (derived from trip)

**Test Bulk Edit:**
1. Login as agent
2. View itinerary
3. Edit multiple sections at once (if bulk update available)
4. Save changes
5. Check Admin Log
6. Expected: See `itinerary_edited` event with `updateCount` in metadata

**Test Edit Revert:**
1. Login as agent
2. View itinerary edit history
3. Revert an edit
4. Check Admin Log
5. Expected: See `itinerary_edited` event with `revertedEdit` metadata

---

### 3. Audit Event: client_message_sent

**Test:**
1. Login as agent
2. Open trip with messaging enabled
3. Send a message to client
4. Check Admin Log (as owner)
5. Expected: See `client_message_sent` event with:
   - `userId`: Agent ID
   - `userRole`: Agent role
   - `tripId`: Trip ID
   - `metadata.from`: 'agent'
   - `metadata.messageLength`: Message character count
   - `metadata.agencyId`: Agency ID

**Verify Client Messages NOT Logged:**
1. Open client portal
2. Send a message as client
3. Check Admin Log
4. Expected: No `client_message_sent` event (only agent messages are logged)

---

### 4. Audit Event: itinerary_viewed_by_client (Throttled)

**Test First View:**
1. Open client portal with trip link
2. View itinerary
3. Check Admin Log (as owner)
4. Expected: See `itinerary_viewed_by_client` event with:
   - `userId`: null (unauthenticated client)
   - `metadata.viewer`: 'client_portal'
   - `metadata.accessWindow`: Access window info
   - `metadata.tripStatus`: Trip status

**Test Throttling:**
1. Open client portal
2. View itinerary (logs event)
3. Refresh page immediately (within 10 minutes)
4. Check Admin Log
5. Expected: Only ONE event logged (throttled)
6. Wait 11+ minutes
7. Refresh page again
8. Check Admin Log
9. Expected: Second event logged (throttle expired)

---

### 5. Improved 402 Error Messages

**Test Public Route (Client Intake):**
1. Set agency to have 0 remaining itinerary slots
2. Submit questionnaire via public link
3. Expected: 402 error with message:
   - "This agency has reached its monthly itinerary limit. Please contact your travel agent."
   - Should NOT show internal details (X/Y counts or plan names)

**Test Authenticated Route (Agent Generation):**
1. Login as agent
2. Set agency to have 0 remaining itinerary slots
3. Attempt to generate itinerary from agent dashboard
4. Expected: 402 error with message:
   - "Your agency has reached its monthly itinerary limit. Please upgrade your plan or add extra itineraries."
   - Can show usage details in response body (for agent context)

---

## Verification Checklist

- [x] Non-owner cannot access Admin Log backend endpoint (403)
- [x] Non-owner redirected from Admin Log UI page
- [x] Owner can access Admin Log successfully
- [x] `itinerary_edited` events logged for section edits
- [x] `itinerary_edited` events logged for bulk edits
- [x] `itinerary_edited` events logged for edit reverts
- [x] `client_message_sent` events logged for agent messages
- [x] Client messages NOT logged (correctly)
- [x] `itinerary_viewed_by_client` events logged (throttled)
- [x] Public route 402 message is client-friendly
- [x] Authenticated route 402 message is agent-friendly
- [x] Documentation updated with correct date and wording

---

## Technical Notes

### Audit Logger Helper

The new `auditLogger.js` helper provides:
- Automatic `agency_id` derivation from `tripId` via JOIN with `Trips` table
- In-memory throttling for client view events (10-minute window)
- Best-effort logging (failures don't break main requests)
- Consistent metadata structure across all events

### Throttling Implementation

Client view events are throttled using an in-memory `Map`:
- Key: `tripId`
- Value: Last logged timestamp (milliseconds)
- Throttle window: 10 minutes (600,000 ms)
- Cleans up automatically on subsequent views

For production, consider moving to Redis or database-backed throttling for multi-server deployments.

### Agency_ID Derivation

All audit events now include `agency_id` in metadata:
- For authenticated routes: Derived from `req.user.agency_id` or via trip lookup
- For public routes: Derived from trip lookup only
- Never trusts client-provided `agency_id` (always derived server-side)

---

**End of Addendum**
