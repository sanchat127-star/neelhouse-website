# Image Hosting Guide for NEEL House Website

## ✅ RECOMMENDED: Use Vercel's Public Folder

This is the **easiest and best** solution for your Vercel deployment!

### Step 1: Create the Public Folder Structure

In your GitHub repository `neelhouse-website`, create this structure:

```
neelhouse-website/
├── public/
│   └── images/
│       ├── logo.jpg
│       ├── home.jpg
│       ├── cognitive_enrichment.jpg
│       ├── musical_heritage.jpg
│       ├── vibrational_sound.jpg
│       ├── ai_enhanced.jpg
│       ├── rabindranath_tagore.jpg
│       ├── programs.jpg
│       ├── community_event.jpg
│       └── social.jpg
├── src/
└── package.json
```

### Step 2: Upload Your Images

1. Go to your GitHub repository
2. Click "Add file" → "Upload files"
3. Create folder: Type `public/images/` in the upload path
4. Upload all 10 images (make sure they're all lowercase!)
5. Commit the changes

### Step 3: Push to GitHub

Once you commit, Vercel will automatically:
- Deploy the new version
- Serve images from `/images/` URL path
- Your custom images will appear on the website! 🎉

### How Images Are Referenced in Code

All your components now use URLs like this:

```tsx
// Navigation & Footer
<img src="/images/logo.jpg" alt="NEEL House Logo" />

// About Page
<img src="/images/rabindranath_tagore.jpg" alt="Rabindranath Tagore" />

// Other pages (currently using placeholders, ready to update):
<img src="/images/home.jpg" alt="Home" />
<img src="/images/cognitive_enrichment.jpg" alt="Cognitive Enrichment" />
<img src="/images/musical_heritage.jpg" alt="Musical Heritage" />
<img src="/images/vibrational_sound.jpg" alt="Vibrational Sound" />
<img src="/images/ai_enhanced.jpg" alt="AI Enhanced" />
<img src="/images/programs.jpg" alt="Programs" />
<img src="/images/community_event.jpg" alt="Community Event" />
<img src="/images/social.jpg" alt="Social" />
```

---

## 🌐 Alternative: Free Image Hosting Services

If you prefer to host images externally:

### Option 1: ImgBB (Easiest)
1. Go to https://imgbb.com/
2. Click "Start uploading"
3. Upload your images (one by one or bulk)
4. Right-click on image → "Copy image address"
5. Use the URL in your code

**Example URL:** `https://i.ibb.co/abc123/logo.jpg`

### Option 2: Imgur
1. Go to https://imgur.com/
2. Click "New post"
3. Upload your image
4. Right-click on image → "Copy image address"
5. Use the URL in your code

**Example URL:** `https://i.imgur.com/abc123.jpg`

### Option 3: Cloudinary (Professional)
1. Go to https://cloudinary.com/
2. Sign up for free account
3. Upload images to Media Library
4. Copy the image URL
5. Use in your code

**Example URL:** `https://res.cloudinary.com/yourname/image/upload/v123/logo.jpg`

---

## 📝 Current Image Status

### ✅ Updated to use `/public/images/` URLs:
- Navigation.tsx → `/images/logo.jpg`
- Footer.tsx → `/images/logo.jpg`
- About.tsx → `/images/rabindranath_tagore.jpg`

### 📋 Still using Unsplash placeholders (ready to update):
- Home.tsx
- HomeAlt.tsx
- Approach.tsx
- Programs.tsx
- GetInvolved.tsx
- Inspiration.tsx

Once you upload images to `/public/images/`, you can update these files by replacing the Unsplash URLs with `/images/filename.jpg`.

---

## 🎯 Quick Action Steps

1. **Create** `/public/images/` folder in GitHub
2. **Upload** all 10 images (lowercase names!)
3. **Commit** and push
4. **Wait** for Vercel to deploy (~30 seconds)
5. **Visit** https://www.neelhouse.org/ to see your images! 🎉

---

## ⚠️ Important Notes

- Image filenames are **case-sensitive**! Use lowercase.
- Images in `/public/` are referenced with `/` (not `./public/`)
- Vercel automatically serves everything in `/public/` folder
- No import statements needed - just use the URL path!

---

## 🆘 Troubleshooting

**Images not showing?**
- Check folder path is exactly: `/public/images/`
- Verify filenames are lowercase
- Clear browser cache (Ctrl+Shift+R)
- Wait 1-2 minutes for Vercel deployment

**404 errors?**
- Check the URL in browser: `https://www.neelhouse.org/images/logo.jpg`
- If 404, image is not in the right folder

---

Need help? The code is already set up and ready - just upload the images! 🚀
