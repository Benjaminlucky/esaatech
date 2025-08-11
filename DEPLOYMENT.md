# Firebase Hosting Deployment Guide

This project is configured for automated deployment to Firebase Hosting using GitHub Actions.

## Setup Instructions

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing project
3. Enable Hosting in the Firebase console

### 2. Get Firebase Service Account Key
1. In Firebase Console, go to Project Settings
2. Go to Service Accounts tab
3. Click "Generate new private key"
4. Download the JSON file

### 3. Configure GitHub Secrets
1. Go to your GitHub repository
2. Go to Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `FIREBASE_SERVICE_ACCOUNT`: Paste the entire content of the service account JSON file
   - Update `projectId` in `.github/workflows/firebase-deploy.yml` with your Firebase project ID

### 4. Update Firebase Project ID
Edit `.github/workflows/firebase-deploy.yml` and replace `your-firebase-project-id` with your actual Firebase project ID.

## How It Works

1. **Push to main branch** → Triggers GitHub Actions workflow
2. **Build process** → Installs dependencies and builds the React app
3. **Deploy to Firebase** → Automatically deploys to Firebase Hosting
4. **Live URL** → Your app is available at `https://your-project-id.web.app`

## Manual Deployment (Optional)

If you need to deploy manually:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## Benefits

- ✅ **Version Control**: All code changes tracked in GitHub
- ✅ **Automated Deployment**: Deploy on every push to main
- ✅ **Rollback**: Easy to revert to previous versions
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **SSL Certificate**: Automatic HTTPS
- ✅ **Custom Domains**: Support for custom domain names 