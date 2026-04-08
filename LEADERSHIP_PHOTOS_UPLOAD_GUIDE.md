# 📸 Leadership Photos Upload Guide for NEEL House Website

## ✅ **Status: Code Updated**

The Leadership page has been updated to reference photos from the `/public/images/leaders/` folder instead of Figma assets. You'll now see placeholder images (?) until you upload the actual photos.

---

## 📁 **Required Folder Structure**

Create this folder structure in your project:

```
your-project/
├── public/
│   ├── audio/                        (already created for audio files)
│   └── images/
│       └── leaders/                   (create this folder)
│           ├── sanchalita-chatterjee.jpg
│           ├── dinesh-sharma.jpg
│           ├── dominic-anthony-herrera.jpg
│           ├── gitali-chatterji.jpg
│           └── vikas-adlakha.jpg
├── src/
└── package.json
```

---

## 📋 **Required Leadership Photos (5 files)**

Upload these **5 JPEG files** to `/public/images/leaders/`:

1. ✅ **sanchalita-chatterjee.jpg** - Sanchalita Chatterjee (Founder & Executive Director + Board Member)
2. ✅ **dinesh-sharma.jpg** - Dinesh Sharma (Board Member)
3. ✅ **dominic-anthony-herrera.jpg** - Dominic Anthony Herrera (Board Member)
4. ✅ **gitali-chatterji.jpg** - Gitali Chatterji (Treasurer)
5. ✅ **vikas-adlakha.jpg** - Vikas Adlakha (Secretary)

**Note:** Sanchalita Chatterjee's photo is used twice on the page (Founder/Executive Director and Board Member roles).

---

## ✅ **Photo Requirements**

### **Format & Technical Specs:**
- ✅ **File Format**: `.jpg` or `.jpeg`
- ✅ **Recommended Size**: 500x500 pixels (square format works best)
- ✅ **Minimum Size**: 300x300 pixels
- ✅ **Maximum Size**: 2000x2000 pixels
- ✅ **Aspect Ratio**: 1:1 (square) preferred, but any portrait/square will work
- ✅ **File Size**: Under 500 KB per photo (ideally 100-300 KB)
- ✅ **Resolution**: 72-150 DPI for web

### **Photo Quality:**
- ✅ **Professional headshots** or high-quality portrait photos
- ✅ **Well-lit** with clear facial features
- ✅ **Clean background** (solid color or blurred preferred)
- ✅ **Face centered** in the frame
- ✅ **High resolution** but web-optimized

### **File Naming (CRITICAL):**
- ✅ **Must match exactly** (case-sensitive):
  - `sanchalita-chatterjee.jpg`
  - `dinesh-sharma.jpg`
  - `dominic-anthony-herrera.jpg`
  - `gitali-chatterji.jpg`
  - `vikas-adlakha.jpg`
- ✅ **All lowercase**
- ✅ **Use hyphens** (not spaces or underscores)
- ✅ **Extension must be** `.jpg` (not `.JPG`, `.jpeg`, or `.JPEG`)

---

## 🔍 **How Photos Are Displayed**

Each leadership photo appears in a **circular frame** (128x128px) on the Leadership page:
- Photos are automatically cropped to fit the circle
- The `object-cover` CSS class ensures photos fill the circle properly
- Photos are centered within the circular frame

**Best photo composition:**
- Head and shoulders shot
- Face centered in the original image
- Adequate space around the face (not too zoomed in)

---

## 🛠️ **Photo Preparation Tips**

### **Resize Photos (if needed):**

**Online Tools:**
- https://www.iloveimg.com/resize-image (Free)
- https://www.canva.com/ (Free, with editing features)
- https://squoosh.app/ (Google's image optimizer)

**Desktop Software:**
- **Mac**: Preview (built-in) → Tools → Adjust Size
- **Windows**: Paint → Resize
- **Cross-platform**: GIMP (free), Photoshop

### **Optimize File Size:**

**Online Compression:**
- https://tinyjpg.com/ (reduces file size by 50-70%)
- https://compressor.io/ (smart compression)
- https://squoosh.app/ (advanced options)

**Recommended Settings:**
- Quality: 80-85%
- Format: JPEG
- Progressive: Yes (for faster web loading)

### **Crop to Square (if needed):**

**Online:**
1. Visit https://www.iloveimg.com/crop-image
2. Upload photo
3. Select "Square" aspect ratio
4. Center the face in the crop
5. Download cropped image

**Mac/Windows:**
- Use built-in photo editors
- Select square crop tool
- Center face in the square
- Save as JPEG

---

## 🚀 **Step-by-Step Upload Process**

### **1. Prepare Your Photos**
```bash
# Rename files to match required names (example):
# From: IMG_1234.jpg → To: sanchalita-chatterjee.jpg
```

### **2. Create Folder Structure**
```bash
# In your project root
mkdir -p public/images/leaders
```

### **3. Copy Photos**
```bash
# Copy all 5 photos to the leaders folder
cp /path/to/your/photos/*.jpg public/images/leaders/
```

### **4. Verify Files Are in Place**
```bash
# Check folder contents
ls -lh public/images/leaders/

# Expected output:
# sanchalita-chatterjee.jpg
# dinesh-sharma.jpg
# dominic-anthony-herrera.jpg
# gitali-chatterji.jpg
# vikas-adlakha.jpg
```

### **5. Verify Filenames Match Exactly**
```bash
# Check spelling and case
ls public/images/leaders/

# Common mistakes to avoid:
# ❌ Sanchalita-Chatterjee.jpg (wrong capitalization)
# ❌ sanchalita_chatterjee.jpg (underscore instead of hyphen)
# ❌ sanchalita-chatterjee.JPG (uppercase extension)
# ❌ sanchalita chatterjee.jpg (space instead of hyphen)
```

### **6. Add to Git**
```bash
git add public/images/leaders/
git commit -m "Add leadership team photos"
```

### **7. Push to GitHub**
```bash
git push origin main
```

### **8. Wait for Vercel Deployment**
- Vercel will automatically rebuild (1-3 minutes)
- Check deployment status: https://vercel.com/dashboard

### **9. Test on Live Site**
Visit: https://www.neelhouse.org/leadership
- Verify all 6 leadership profiles show photos (Sanchalita appears twice)
- Check that photos are centered and look good in circular frames

---

## 🔍 **Verification Checklist**

Before pushing to production:

- [ ] Created `/public/images/leaders/` folder
- [ ] All 5 photos are in JPEG format
- [ ] Filenames match exactly (lowercase with hyphens)
- [ ] Photos are square or portrait orientation
- [ ] File sizes are under 500 KB each
- [ ] Photos are clear and professional quality
- [ ] Tested filenames for typos
- [ ] Files are committed to Git
- [ ] Changes pushed to GitHub
- [ ] Vercel deployment completed

---

## 🧪 **Testing & Verification**

### **Test Direct Photo URLs:**
After deployment, verify each photo loads directly:

1. https://www.neelhouse.org/images/leaders/sanchalita-chatterjee.jpg
2. https://www.neelhouse.org/images/leaders/dinesh-sharma.jpg
3. https://www.neelhouse.org/images/leaders/dominic-anthony-herrera.jpg
4. https://www.neelhouse.org/images/leaders/gitali-chatterji.jpg
5. https://www.neelhouse.org/images/leaders/vikas-adlakha.jpg

**Expected Result:**
- ✅ Status 200: Photo loads successfully
- ❌ Status 404: File not found (check path/filename)

### **Check Browser Developer Tools:**
1. Open Leadership page: https://www.neelhouse.org/leadership
2. Press **F12** to open Developer Tools
3. Go to **Network** tab
4. Refresh page
5. Filter by "images" or "jpg"
6. Check that all 5 photos load with Status 200

### **Visual Check:**
- [ ] All 6 leadership cards show photos (not ? placeholders)
- [ ] Photos are centered in circular frames
- [ ] Photos are clear and not pixelated
- [ ] Photos maintain good quality
- [ ] Circular crop looks professional

---

## 🛠️ **Common Issues & Solutions**

### **Issue: Photos show ? instead of images**
**Solutions:**
- ✅ Check filenames match exactly (case-sensitive)
- ✅ Verify files are in `/public/images/leaders/` folder
- ✅ Confirm files are committed and pushed to GitHub
- ✅ Wait for Vercel deployment to complete
- ✅ Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### **Issue: Photos appear stretched or cropped badly**
**Solutions:**
- ✅ Use square photos (1:1 aspect ratio)
- ✅ Ensure face is centered in original photo
- ✅ Leave adequate space around the face
- ✅ Use higher resolution source images

### **Issue: Photos load slowly**
**Solutions:**
- ✅ Compress photos using TinyJPG or similar
- ✅ Resize to 500x500px maximum
- ✅ Keep file size under 200 KB per photo
- ✅ Use progressive JPEG format

### **Issue: 404 error on photo URLs**
**Solutions:**
- ✅ Double-check folder path: `/public/images/leaders/`
- ✅ Verify filenames have no typos
- ✅ Check file extensions are `.jpg` (lowercase)
- ✅ Ensure `.gitignore` doesn't exclude public folder
- ✅ Re-push files to GitHub

### **Issue: Wrong photo appears for a person**
**Solutions:**
- ✅ Verify filename matches the person's name exactly
- ✅ Check you renamed files correctly
- ✅ Clear browser cache after fixing

---

## 📊 **Photo Format Comparison**

| Format | Pros | Cons | Recommended? |
|--------|------|------|--------------|
| **JPG/JPEG** | Small file size, universal support | Lossy compression | ✅ **Yes** |
| **PNG** | Lossless quality, transparency | Large file size | ❌ No (too large) |
| **WebP** | Great compression, modern | Limited old browser support | ⚠️ Optional |
| **HEIC** | iOS photos | Not web-compatible | ❌ No (convert first) |

**Always convert to JPEG (.jpg) for web use!**

---

## 💡 **Pro Tips**

1. **Batch Process Photos**: Use online tools to resize/compress all 5 photos at once
2. **Keep Originals**: Save high-res originals separately before optimizing for web
3. **Use Consistent Lighting**: Photos look more professional with similar lighting
4. **Test on Mobile**: Check how circular photos look on different screen sizes
5. **Optimize Before Upload**: Always compress photos before adding to project
6. **Use Descriptive Alt Text**: Already included in code for accessibility

---

## 📱 **Mobile Considerations**

The circular photo frames are **responsive**:
- Desktop: 128x128px circles
- Mobile: Scales proportionally
- Always maintains 1:1 aspect ratio
- Photos remain centered

---

## 🆘 **Still Having Issues?**

### **Debug Steps:**

1. **Check Browser Console:**
   - Open DevTools (F12)
   - Look for 404 errors on image requests
   - Note exact file path being requested

2. **Verify File Paths:**
   - Photos MUST be in `/public/images/leaders/`
   - NOT in `/src/` or `/src/assets/`
   - Public folder is served directly by Vercel

3. **Test Locally First:**
   - Run dev server: `npm run dev`
   - Visit: http://localhost:5173/leadership
   - Verify photos load before deploying

4. **Check Git Status:**
   ```bash
   git status
   # Ensure public/images/leaders/ is tracked
   
   git ls-files public/images/leaders/
   # Should list all 5 photos
   ```

5. **Check Vercel Logs:**
   - Visit Vercel dashboard
   - Check deployment logs for any errors
   - Verify build completed successfully

---

## 📞 **Quick Reference**

**Folder Location:** `/public/images/leaders/`

**Required Files:**
1. `sanchalita-chatterjee.jpg`
2. `dinesh-sharma.jpg`
3. `dominic-anthony-herrera.jpg`
4. `gitali-chatterji.jpg`
5. `vikas-adlakha.jpg`

**Commands:**
```bash
# Create folder
mkdir -p public/images/leaders

# Add to Git
git add public/images/leaders/

# Commit
git commit -m "Add leadership photos"

# Push
git push origin main
```

**Test URLs:**
- Page: https://www.neelhouse.org/leadership
- Photos: https://www.neelhouse.org/images/leaders/[filename].jpg

---

**Last Updated:** April 8, 2026  
**Website:** https://www.neelhouse.org/  
**Page:** Leadership Team
