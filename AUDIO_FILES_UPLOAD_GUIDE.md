# 🎵 Audio Files Upload Guide for NEEL House Website

## 📋 **Current Status**

Your Rabindra Mosaic page is configured to play **2 audio files**:
1. `neelmonilata-poem.m4a` - Poetry recitation by Sarbari Gupta
2. `rabindra-sangeet-kamalika.m4a` - Rabindra Sangeet by Kamalika Chakrabarty

---

## 📁 **Where to Upload Audio Files**

### **Option 1: Local Development (Testing)**
For local testing in Figma Make, create this folder structure:
```
/public/
  └── audio/
      ├── neelmonilata-poem.m4a
      └── rabindra-sangeet-kamalika.m4a
```

### **Option 2: Vercel Deployment (Production)**
For your live website at https://www.neelhouse.org/, you need to:

1. **Create the `public` folder** in your project root (same level as `src/`)
2. **Create an `audio` subfolder** inside `public`
3. **Add your audio files** to `/public/audio/`

```
your-project/
├── public/
│   └── audio/
│       ├── neelmonilata-poem.m4a
│       └── rabindra-sangeet-kamalika.m4a
├── src/
├── package.json
└── vercel.json
```

---

## ✅ **Audio File Requirements**

### **Format Requirements:**
- ✅ **File Format**: `.m4a` (recommended) or `.mp3`
- ✅ **Codec**: AAC for `.m4a` files
- ✅ **Bit Rate**: 128-256 kbps (good balance of quality & file size)
- ✅ **Sample Rate**: 44.1 kHz or 48 kHz

### **File Size Recommendations:**
- 🎯 **Target**: Under 10 MB per file
- ⚠️ **Maximum**: 25 MB per file (for reasonable load times)
- 💡 **Tip**: Compress audio if files are too large

### **File Naming:**
- ✅ **Must match exactly**: `neelmonilata-poem.m4a` and `rabindra-sangeet-kamalika.m4a`
- ✅ **Case-sensitive**: Use lowercase filenames
- ✅ **No spaces**: Use hyphens instead

---

## 🔍 **How to Verify Audio Files**

### **1. Check File Format**
On **Mac**:
```bash
file neelmonilata-poem.m4a
# Should show: ISO Media, Apple iTunes ALAC/AAC-LC (M4A) Audio
```

On **Windows**:
- Right-click file → Properties → Details tab
- Check "File type" and "Audio format"

### **2. Verify File Plays Locally**
- Open the file in a media player (QuickTime, VLC, Windows Media Player)
- Ensure it plays without errors
- Check audio quality is acceptable

### **3. Check File Size**
- Right-click → Properties (Windows) or Get Info (Mac)
- If file is over 25 MB, consider compressing it

### **4. Test File Names**
Make sure filenames match **exactly**:
```
✅ neelmonilata-poem.m4a
✅ rabindra-sangeet-kamalika.m4a

❌ Neelmonilata-Poem.m4a (wrong capitalization)
❌ neelmonilata-poem.mp3 (wrong extension - unless you update code)
❌ neelmonilata poem.m4a (has space)
```

---

## 🛠️ **Common Upload Errors & Solutions**

### **Error: "File not found" or 404**
**Solution:**
- Verify files are in `/public/audio/` folder
- Check filename spelling matches exactly
- Ensure you committed and pushed files to GitHub
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### **Error: "Format not supported"**
**Solution:**
- Convert to `.m4a` or `.mp3` format
- Use online converter: https://cloudconvert.com/
- Or use software like Audacity (free)

### **Error: "File too large" or slow loading**
**Solution:**
- Compress audio file using:
  - **Online**: https://www.freeconvert.com/audio-compressor
  - **Software**: Audacity (export at 128 kbps)
- Reduce bitrate to 128 kbps for speech, 192 kbps for music

### **Error: Plays locally but not on Vercel**
**Solution:**
- Make sure `public` folder is in your Git repository
- Check `.gitignore` doesn't exclude `public/audio/`
- Commit files: `git add public/audio/` then `git commit -m "Add audio files"`
- Push to GitHub: `git push`
- Wait 2-3 minutes for Vercel to rebuild

---

## 🚀 **Step-by-Step Upload Process**

### **For Vercel Deployment:**

1. **Create folder structure locally:**
   ```bash
   mkdir -p public/audio
   ```

2. **Copy your audio files:**
   ```bash
   cp /path/to/your/neelmonilata-poem.m4a public/audio/
   cp /path/to/your/rabindra-sangeet-kamalika.m4a public/audio/
   ```

3. **Verify files are in place:**
   ```bash
   ls -lh public/audio/
   ```

4. **Add to Git:**
   ```bash
   git add public/audio/
   git commit -m "Add audio files for Rabindra Mosaic page"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin main
   ```

6. **Wait for Vercel deployment** (usually 1-3 minutes)

7. **Test on live site:**
   - Visit https://www.neelhouse.org/experience-legacy
   - Click play on each audio player
   - Verify both files load and play correctly

---

## 🔊 **Audio File Conversion Tips**

### **Convert to M4A Format:**

**Using Audacity (Free):**
1. Install Audacity: https://www.audacityteam.org/
2. Open your audio file
3. File → Export → Export as M4A (AAC)
4. Set Quality: 128-192 kbps
5. Save with correct filename

**Using Online Converter:**
1. Visit https://cloudconvert.com/
2. Upload your audio file
3. Select output format: M4A (AAC)
4. Set audio bitrate: 128-192 kbps
5. Download and rename to match required filename

---

## 📊 **Recommended Audio Settings**

For **Poetry Recitation** (speech-focused):
- Format: M4A (AAC)
- Bitrate: 64-128 kbps
- Sample Rate: 44.1 kHz
- Channels: Mono (smaller file size)

For **Rabindra Sangeet** (music):
- Format: M4A (AAC)
- Bitrate: 128-192 kbps
- Sample Rate: 44.1 kHz
- Channels: Stereo

---

## ✅ **Verification Checklist**

Before pushing to production, verify:

- [ ] Files are in `/public/audio/` folder
- [ ] Filenames match exactly: `neelmonilata-poem.m4a` and `rabindra-sangeet-kamalika.m4a`
- [ ] Files are in M4A or MP3 format
- [ ] File sizes are under 25 MB each
- [ ] Audio plays correctly in a local media player
- [ ] Files are committed to Git repository
- [ ] `.gitignore` doesn't exclude the `public` folder
- [ ] Changes are pushed to GitHub

---

## 🆘 **Still Having Issues?**

### **Test with Browser Developer Tools:**

1. Open your website
2. Press F12 to open Developer Tools
3. Go to Network tab
4. Filter by "audio" or "media"
5. Click play on audio player
6. Check if request shows:
   - ✅ Status 200 = File loaded successfully
   - ❌ Status 404 = File not found (check path/filename)
   - ❌ Status 403 = Permission denied (check file permissions)

### **Quick Test URL:**
After deploying, test direct file access:
- https://www.neelhouse.org/audio/neelmonilata-poem.m4a
- https://www.neelhouse.org/audio/rabindra-sangeet-kamalika.m4a

If these URLs work, your audio is uploaded correctly! ✅

---

## 💡 **Pro Tips**

1. **Use Cloud Storage for Large Files**: For files over 10 MB, consider hosting on:
   - Google Drive (make sure link is public)
   - Cloudinary (optimized for media)
   - AWS S3 with CloudFront CDN

2. **Optimize Before Upload**: Always compress audio files to balance quality and load time

3. **Test on Multiple Browsers**: Verify audio works on Chrome, Firefox, Safari, and mobile browsers

4. **Monitor File Sizes**: Keep audio files as small as possible without sacrificing quality

---

## 📞 **Need Help?**

If you're still experiencing issues after following this guide, check:
1. Browser console for specific error messages
2. Network tab to see if files are being requested correctly
3. Vercel deployment logs for any build/upload errors

---

**Last Updated:** April 8, 2026
**Website:** https://www.neelhouse.org/
