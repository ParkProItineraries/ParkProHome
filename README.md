# ParkPro - Landing Page

A premium, high-converting landing page for ParkPro, an automated Disney itinerary generator for travel agents.

## Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Interactive Demo**: Real-time itinerary generation using your backend API
- **Request Access Form**: Integrated with your signup system
- **SEO Optimized**: Built for conversions and search visibility

## API Integration

This landing page is wired up to your ParkPro backend API. To configure the connection:

1. Create a `.env` file in the root directory
2. Add your API URL:
   ```
   VITE_API_URL=http://localhost:3000
   ```
   For production, use your actual API URL:
   ```
   VITE_API_URL=https://api.parkproit.com
   ```

## Connected Features

- **Demo Page**: Generates real itineraries using `/api/itineraries/public`
- **Request Access**: Submits to `/api/signup` endpoint
- **App Login**: Links to your main application at `https://app.parkproit.com`

## Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```
