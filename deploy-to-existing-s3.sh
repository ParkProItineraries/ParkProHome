#!/bin/bash

# Simple S3 Deployment Script for ParkPro Home
# Deploys to existing S3 bucket: parkproit.com

set -e  # Exit on any error

# Configuration
BUCKET_NAME="parkproit.com"
REGION="us-east-1"  # Change to your bucket's region if different

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Deploying ParkPro Home to S3${NC}"
echo "=================================="

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
    echo "Visit: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if user is logged in to AWS
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ Not logged in to AWS. Please run 'aws configure' first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ AWS CLI configured${NC}"

# Check if bucket exists
if ! aws s3 ls s3://$BUCKET_NAME &> /dev/null; then
    echo -e "${RED}❌ Bucket '$BUCKET_NAME' not found or not accessible${NC}"
    echo "Please check:"
    echo "1. Bucket name is correct"
    echo "2. You have permissions to access the bucket"
    echo "3. AWS region is correct"
    exit 1
fi

echo -e "${GREEN}✅ S3 bucket found: $BUCKET_NAME${NC}"

# Build the project
echo -e "${YELLOW}📦 Building project...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Build failed - dist directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed${NC}"

# Upload static assets with long cache
echo -e "${YELLOW}📤 Uploading static assets...${NC}"
aws s3 sync dist/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.json" \
    --region $REGION

# Upload HTML files with no cache (for immediate updates)
echo -e "${YELLOW}📤 Uploading HTML files...${NC}"
aws s3 sync dist/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public, max-age=0, must-revalidate" \
    --include "*.html" \
    --include "*.json" \
    --region $REGION

echo -e "${GREEN}✅ Files uploaded to S3${NC}"

# Set bucket policy for public read access (if not already set)
echo -e "${YELLOW}🔒 Setting bucket policy for public access...${NC}"

cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy \
    --bucket $BUCKET_NAME \
    --policy file://bucket-policy.json \
    --region $REGION

# Clean up temporary file
rm bucket-policy.json

echo -e "${GREEN}✅ Bucket policy updated${NC}"

# Enable static website hosting
echo -e "${YELLOW}🌐 Configuring static website hosting...${NC}"

aws s3 website s3://$BUCKET_NAME \
    --index-document index.html \
    --error-document index.html \
    --region $REGION

echo -e "${GREEN}✅ Static website hosting enabled${NC}"

# Get website URL
WEBSITE_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

echo ""
echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo "=================================="
echo -e "${BLUE}Website URL: $WEBSITE_URL${NC}"
echo -e "${BLUE}S3 Bucket: $BUCKET_NAME${NC}"
echo ""
echo -e "${YELLOW}📝 Next Steps:${NC}"
echo "1. Test your website at: $WEBSITE_URL"
echo "2. If you have a custom domain, point it to this S3 website endpoint"
echo "3. For HTTPS, consider setting up CloudFront distribution"
echo ""
echo -e "${GREEN}✨ Your website should be live now!${NC}"
