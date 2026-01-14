# ParkPro Home Deployment Guide

## Quick Deployment to Existing S3 Bucket

You have an existing S3 bucket named `parkproit.com`. Here's how to deploy your website:

### Prerequisites
1. **AWS CLI installed and configured**
   ```bash
   aws configure
   ```
   Enter your AWS Access Key ID, Secret Access Key, and region.

2. **Node.js and npm installed**

### Deployment Steps

#### Option 1: Automated Script (Recommended)
```bash
./deploy-to-existing-s3.sh
```

This script will:
- Build your project
- Upload files to your S3 bucket
- Configure public read access
- Enable static website hosting
- Provide you with the website URL

#### Option 2: Manual Deployment
```bash
# 1. Build the project
npm run build

# 2. Upload to S3
aws s3 sync dist/ s3://parkproit.com/ --delete

# 3. Set public read policy
aws s3api put-bucket-policy --bucket parkproit.com --policy '{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::parkproit.com/*"
        }
    ]
}'

# 4. Enable static website hosting
aws s3 website s3://parkproit.com --index-document index.html --error-document index.html
```

### After Deployment

Your website will be available at:
**http://parkproit.com.s3-website-us-east-1.amazonaws.com**

### Custom Domain Setup

If you want to use your custom domain (`parkproit.com`):

1. **Option A: S3 Website Endpoint (HTTP only)**
   - Point your domain's A record to the S3 website endpoint
   - This only supports HTTP (not HTTPS)

2. **Option B: CloudFront + Custom Domain (Recommended)**
   - Set up a CloudFront distribution
   - Point your domain to CloudFront
   - This supports HTTPS and better performance

### CloudFront Setup (Optional but Recommended)

For HTTPS and better performance:

1. **Create CloudFront Distribution:**
   - Origin: Your S3 bucket website endpoint
   - Default root object: `index.html`
   - Custom error pages: 404 → 200 → `/index.html`

2. **Custom Domain:**
   - Add your domain as an alias
   - Request SSL certificate in AWS Certificate Manager
   - Update Route 53 records to point to CloudFront

### Troubleshooting

**Build fails:**
```bash
npm install
npm run build
```

**AWS permissions error:**
- Ensure your AWS credentials have S3 permissions
- Check bucket name and region

**Website not loading:**
- Verify bucket policy allows public read
- Check static website hosting is enabled
- Clear browser cache

### File Structure After Deployment

Your S3 bucket will contain:
```
parkproit.com/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── [other static files]
```

### Updates

To update your website:
1. Make changes to your code
2. Run the deployment script again: `./deploy-to-existing-s3.sh`
3. Changes will be live immediately

### Cost Considerations

- **S3 Storage**: ~$0.023 per GB per month
- **Data Transfer**: ~$0.09 per GB for first 10TB
- **Requests**: ~$0.0004 per 1,000 GET requests

For a typical landing page, expect costs under $1/month.
