#!/bin/bash
set -e

echo "🔍 Running baseline verification..."

echo "📦 Installing dependencies..."
npm install

echo "🏗️  Building..."
npm run build

echo "✅ Baseline verification complete!"
