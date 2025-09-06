#!/bin/bash

# AI Engineer Portfolio Deployment Script

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are in the 'build' directory"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. GitHub Pages: npm run deploy (if configured)"
    echo "2. Netlify: Drag and drop the 'build' folder to netlify.com"
    echo "3. Vercel: Run 'vercel' command"
    echo "4. Any static hosting: Upload 'build' folder contents"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
