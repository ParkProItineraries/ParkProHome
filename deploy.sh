#!/bin/bash

# ParkPro Home Deployment Script
# Deploys the built website to S3 and invalidates CloudFront cache

set -e  # Exit on any error

# Configuration
S3_BUCKET="parkproit.com"
AWS_REGION="us-east-1"
CLOUDFRONT_STACK="parkproit-cloudfront"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Deploying ParkPro Home to S3${NC}"
echo "=================================="

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}📦 Building project first...${NC}"
    npm run build
fi

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if user is logged in to AWS
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ Not logged in to AWS. Please run 'aws configure' first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ AWS CLI configured${NC}"

# Upload static assets with long cache
echo -e "${YELLOW}📤 Uploading static assets...${NC}"
aws s3 sync dist/ s3://$S3_BUCKET/ \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.json" \
    --exclude "*.xml" \
    --exclude "*.txt"

# Upload HTML and JSON files with no cache
echo -e "${YELLOW}📄 Uploading HTML and JSON files...${NC}"
aws s3 sync dist/ s3://$S3_BUCKET/ \
    --delete \
    --cache-control "public, max-age=0, must-revalidate" \
    --include "*.html" \
    --include "*.json"

# Upload sitemap.xml with correct MIME type
echo -e "${YELLOW}🗺️ Uploading sitemap.xml...${NC}"
aws s3 cp dist/sitemap.xml s3://$S3_BUCKET/sitemap.xml \
    --content-type "application/xml" \
    --cache-control "public, max-age=3600"

# Upload robots.txt with correct MIME type
echo -e "${YELLOW}🤖 Uploading robots.txt...${NC}"
aws s3 cp dist/robots.txt s3://$S3_BUCKET/robots.txt \
    --content-type "text/plain" \
    --cache-control "public, max-age=3600"

echo -e "${GREEN}✅ Files uploaded to S3${NC}"

# Invalidate CloudFront cache
echo -e "${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
    --stack-name $CLOUDFRONT_STACK \
    --region $AWS_REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
    --output text 2>/dev/null || echo "")

if [ ! -z "$DISTRIBUTION_ID" ] && [ "$DISTRIBUTION_ID" != "None" ]; then
    aws cloudfront create-invalidation \
        --distribution-id $DISTRIBUTION_ID \
        --paths "/*"
    echo -e "${GREEN}✅ CloudFront cache invalidated${NC}"
else
    echo -e "${YELLOW}⚠️ Could not find CloudFront distribution ID${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo "=================================="
echo -e "${BLUE}Website URL: https://parkproit.com${NC}"
echo -e "${BLUE}S3 Bucket: s3://$S3_BUCKET/${NC}"
echo -e "${BLUE}CloudFront Distribution: $DISTRIBUTION_ID${NC}"
echo ""
echo -e "${GREEN}✨ Your website is now live with the latest changes!${NC}"
