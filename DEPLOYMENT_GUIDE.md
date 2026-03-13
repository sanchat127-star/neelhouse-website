# Neelmonilata (NEEL) House Website Deployment Guide

**Domain:** neelhouse.org (GoDaddy)  
**Website:** React Application with Multi-page Navigation  
**Last Updated:** March 8, 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Option A: GoDaddy Hosting (Not Recommended)](#option-a-godaddy-hosting-not-recommended)
3. [Option B: Vercel Hosting (Recommended)](#option-b-vercel-hosting-recommended)
4. [Option C: Netlify Hosting (Alternative)](#option-c-netlify-hosting-alternative)
5. [Converting This Guide to PDF](#converting-this-guide-to-pdf)

---

## Overview

You have purchased the domain **neelhouse.org** from GoDaddy. This guide explains how to deploy your React website and make it live on the internet.

### Important Note

While you own the domain through GoDaddy, **we recommend hosting the actual website on a modern platform like Vercel or Netlify** (both free) rather than using GoDaddy's hosting service. This approach:

- ✅ Saves money (hosting is free)
- ✅ Provides better performance
- ✅ Includes automatic HTTPS/SSL
- ✅ Offers automatic deployments
- ✅ Provides global CDN (faster worldwide)

You'll keep your GoDaddy domain but just point it to your hosting platform via DNS settings.

---

## Option A: GoDaddy Hosting (Not Recommended)

### Why Not Recommended

- ❌ Additional monthly cost ($5-15/month)
- ❌ Slower performance
- ❌ Manual deployment process
- ❌ Requires technical .htaccess configuration
- ❌ No automatic updates

### Steps (If You Choose GoDaddy)

#### 1. Purchase GoDaddy Hosting Plan

1. Log into your GoDaddy account at [godaddy.com](https://www.godaddy.com)
2. Navigate to "Web Hosting" in the products menu
3. Purchase a hosting plan (Web Hosting or cPanel hosting recommended)
4. Complete the purchase process

#### 2. Build Your React Application

On your local computer, run these commands in your project directory:

```bash
npm install
npm run build
```

This creates a `dist` folder containing your production-ready website files.

#### 3. Access GoDaddy File Manager

1. Log into your GoDaddy account
2. Go to "My Products"
3. Find your hosting account and click "Manage"
4. Click "cPanel Admin" or "File Manager"
5. Navigate to the `public_html` folder

#### 4. Upload Your Website Files

1. In File Manager, select and delete all default files in `public_html`
2. Click "Upload"
3. Upload ALL files and folders from your local `dist` folder
4. Ensure the file structure includes:
   - `index.html`
   - `assets/` folder
   - All other generated files

#### 5. Configure .htaccess for React Router

React Router requires special configuration to work on traditional hosting:

1. In `public_html`, create a new file named `.htaccess`
2. Add this exact content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

3. Save the file

#### 6. Connect Your Domain

1. In GoDaddy, go to "My Products" → "Domains"
2. Find neelhouse.org and click "DNS"
3. Ensure the A Record points to your hosting server IP
   - Usually automatic if domain and hosting are from same GoDaddy account
4. Wait 24-48 hours for DNS propagation

#### 7. Enable SSL/HTTPS (Important!)

1. In GoDaddy cPanel, find "SSL/TLS Status"
2. Enable SSL for neelhouse.org
3. Add this to your `.htaccess` file (at the top):

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Future Updates

Every time you make changes:
1. Run `npm run build` locally
2. Upload new files to GoDaddy File Manager
3. Overwrite existing files

---

## Option B: Vercel Hosting (Recommended) ✅

### Why Vercel Is Best

- ✅ **100% FREE** for non-profit projects
- ✅ Automatic HTTPS/SSL certificates
- ✅ Lightning-fast global CDN (Content Delivery Network)
- ✅ Automatic deployments from GitHub
- ✅ Perfect optimization for React applications
- ✅ Built-in analytics and monitoring
- ✅ No manual uploads needed - ever!

### Total Cost

- Domain (GoDaddy): ~$15/year (already purchased)
- Hosting (Vercel): **$0/month forever**

---

### Step-by-Step Instructions

#### Step 1: Create a GitHub Account (If You Don't Have One)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Create a free account
4. Verify your email address

#### Step 2: Create a GitHub Repository

1. Log into GitHub
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `neelhouse-website`
5. Keep it **Public** (required for free hosting)
6. Click "Create repository"

#### Step 3: Upload Your Code to GitHub

**Option A: Using GitHub Website (Easier for Non-Technical Users)**

1. On your repository page, click "uploading an existing file"
2. Drag and drop ALL your project files and folders
3. **Important:** Upload everything EXCEPT:
   - `node_modules/` folder (too large)
   - `dist/` folder (auto-generated)
4. Add a commit message: "Initial website upload"
5. Click "Commit changes"

**Option B: Using Git Command Line (For Technical Users)**

```bash
# Navigate to your project folder
cd path/to/your/project

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/neelhouse-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 4: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account
5. Complete the signup process (it's free!)

#### Step 5: Deploy Your Website to Vercel

1. On the Vercel dashboard, click "Add New..." → "Project"
2. You'll see your GitHub repositories
3. Find `neelhouse-website` and click "Import"
4. Vercel will auto-detect it's a Vite React project
5. **Framework Preset:** Should auto-select "Vite"
6. **Build Command:** `npm run build` (auto-filled)
7. **Output Directory:** `dist` (auto-filled)
8. Click "Deploy"
9. Wait 1-2 minutes while Vercel builds and deploys
10. You'll see "Congratulations!" with a live URL like `neelhouse-website.vercel.app`

#### Step 6: Connect Your GoDaddy Domain

##### A. Add Domain in Vercel

1. In your Vercel project dashboard, click "Settings"
2. Click "Domains" in the left sidebar
3. In the "Add Domain" field, type: `neelhouse.org`
4. Click "Add"
5. Vercel will show you DNS records to add:
   - **A Record:** `76.76.21.21`
   - **CNAME Record:** `cname.vercel-dns.com`

##### B. Update DNS in GoDaddy

1. Log into your GoDaddy account
2. Go to "My Products"
3. Find your domain `neelhouse.org`
4. Click the three dots (...) → "Manage DNS"

**Add A Record:**
1. Find the existing A Record (if any) or click "Add"
2. Type: `A`
3. Name: `@`
4. Value: `76.76.21.21`
5. TTL: `600` (or default)
6. Click "Save"

**Add CNAME Record for www:**
1. Click "Add"
2. Type: `CNAME`
3. Name: `www`
4. Value: `cname.vercel-dns.com`
5. TTL: `600` (or default)
6. Click "Save"

**Remove Conflicting Records (Important!):**
- If there's an existing A Record with a different IP, delete it
- If there's a "parked" or "forwarding" record, delete it
- Keep only the Vercel DNS records

##### C. Verify Connection

1. Back in Vercel, click "Refresh" next to your domain
2. Wait 1-5 minutes for verification
3. Once verified, you'll see a green checkmark
4. DNS propagation can take up to 48 hours, but usually works in 1-2 hours

#### Step 7: Configure www Redirect (Optional but Recommended)

1. In Vercel "Domains" settings
2. Add `www.neelhouse.org` as another domain
3. Click "Add"
4. Vercel will automatically redirect www to non-www (or vice versa)

---

### Testing Your Live Website

After DNS propagation (1-48 hours):

1. Open a browser
2. Go to `https://neelhouse.org`
3. Your website should load!
4. Test all pages:
   - Home
   - About
   - Inspiration
   - Programs
   - Get Involved

---

### Making Updates in the Future

**This is where Vercel shines!**

1. Make changes to your code locally
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Vercel **automatically detects the change**
4. Vercel **automatically rebuilds and deploys**
5. Your live site updates in 1-2 minutes!

**No manual uploads. No FTP. No hassle.**

---

## Option C: Netlify Hosting (Alternative)

Netlify is very similar to Vercel and equally excellent for React applications.

### Steps for Netlify

1. **Create GitHub Account & Repository** (same as Vercel steps 1-3)

2. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Authorize Netlify

3. **Deploy to Netlify**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Connect Custom Domain**
   - In Netlify dashboard → "Domain settings"
   - Click "Add custom domain"
   - Enter `neelhouse.org`
   - Netlify provides DNS records

5. **Update GoDaddy DNS**
   - Similar to Vercel instructions
   - Use DNS records provided by Netlify

---

## Comparing Your Options

| Feature | GoDaddy Hosting | Vercel | Netlify |
|---------|----------------|--------|---------|
| **Cost** | $5-15/month | FREE | FREE |
| **Speed** | Slower | Very Fast | Very Fast |
| **HTTPS** | Manual setup | Automatic | Automatic |
| **Deployments** | Manual upload | Automatic | Automatic |
| **CDN** | Limited | Global | Global |
| **Best For** | Traditional sites | React apps | React apps |
| **Difficulty** | Medium | Easy | Easy |

---

## Recommended Choice

**🏆 Use Vercel (Option B)**

**Benefits for Neelmonilata (NEEL) House:**
- Save hosting costs (important for non-profits!)
- Professional, fast website
- Easy updates for team members
- Automatic backups via GitHub
- Best performance for your visitors

---

## Need Help?

If you encounter any issues during deployment:

1. **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
2. **Netlify Documentation:** [docs.netlify.com](https://docs.netlify.com)
3. **GoDaddy Support:** Available via your account
4. **GitHub Guides:** [guides.github.com](https://guides.github.com)

---

## Team Member Quick Start

For team members who need to make updates:

### Prerequisites
- GitHub account
- Access to the repository (ask owner to add you as collaborator)
- Git installed on computer (or use GitHub website)

### Making Changes

1. Clone the repository (first time only):
   ```bash
   git clone https://github.com/YOUR_USERNAME/neelhouse-website.git
   cd neelhouse-website
   npm install
   ```

2. Make your changes to the code

3. Test locally:
   ```bash
   npm run dev
   ```

4. Push changes:
   ```bash
   git add .
   git commit -m "Description of what you changed"
   git push
   ```

5. Website updates automatically!

---

## Troubleshooting Common Issues

### Issue: Domain not connecting
- **Solution:** Wait 24-48 hours for DNS propagation
- Check DNS settings in GoDaddy match Vercel/Netlify exactly
- Clear your browser cache

### Issue: Website shows 404 on page refresh
- **Solution:** This is handled automatically by Vercel/Netlify
- If using GoDaddy, check your `.htaccess` file

### Issue: Images not loading
- **Solution:** Check that all images are in the repository
- Verify image paths are correct
- Rebuild and redeploy

### Issue: Changes not showing
- **Solution:** Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check Vercel/Netlify deployment logs
- Verify changes were pushed to GitHub

---

## Security Best Practices

1. **Never commit sensitive data** to GitHub
   - API keys
   - Passwords
   - Email credentials

2. **Use environment variables** for sensitive information (Vercel/Netlify both support this)

3. **Enable HTTPS** (automatic with Vercel/Netlify)

4. **Keep dependencies updated**:
   ```bash
   npm update
   ```

---

## Contact Information

**Organization:** Neelmonilata (NEEL) House  
**Domain:** neelhouse.org  
**Email:** info@neelhouse.org  
**Domain Registrar:** GoDaddy

---

## Appendix: DNS Record Reference

### For Vercel

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

### For Netlify

Netlify provides specific records - follow their dashboard instructions.

---

**Document Version:** 1.0  
**Created:** March 8, 2026  
**For:** Neelmonilata (NEEL) House Website Deployment

---

*This guide was created to help deploy the Neelmonilata (NEEL) House website to the internet. For questions or assistance, contact your web development team.*
