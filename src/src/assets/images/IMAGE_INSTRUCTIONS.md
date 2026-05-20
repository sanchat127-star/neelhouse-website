# Image Integration Instructions

## Required Image Files

Add the following `.jpg` files to this folder (`/src/assets/images/`):

1. **logo.jpg** - Organization logo
2. **home.jpg** - Home page hero background
3. **cognitive_enrichment.jpg** - Cognitive enrichment section
4. **musical_heritage.jpg** - Tagore's Musical Heritage
5. **vibrational_sound.jpg** - Vibrational Sound Experiences
6. **ai_enhanced.jpg** - AI-Enhanced Music Personalization
7. **Rabindranath_tagore.jpg** - About Rabindranath Tagore
8. **programs.jpg** - Programs page hero
9. **community_event.jpg** - Intergenerational Community Events
10. **Social.jpg** - Social media/Follow Us section

---

## Files to Edit After Adding Images

After copying all `.jpg` files to `/src/assets/images/`, you need to **uncomment** the code in these files:

### 1. `/src/app/components/Navigation.tsx`
**Uncomment:**
- Line 4: `import logo from "../../assets/images/logo.jpg";`
- Line 33: `<img src={logo} alt="Neelmonilata (NEEL) House" className="h-16 w-16 object-contain" />`

---

### 2. `/src/app/components/Footer.tsx`
**Uncomment:**
- Line 3: `import logo from "../../assets/images/logo.jpg";`
- Line 13: `<img src={logo} alt="Neelmonilata (NEEL) House" className="h-20 w-auto object-contain" />`

---

### 3. `/src/app/components/pages/Home.tsx`
**Uncomment:**
- Line 4: `import homeImage from "../../assets/images/home.jpg";`
- Line 6: `import cognitiveEnrichmentImage from "../../assets/images/cognitive_enrichment.jpg";`
- Line 8: `import musicalHeritageImage from "../../assets/images/musical_heritage.jpg";`
- Line 10: `import vibrationalSoundImage from "../../assets/images/vibrational_sound.jpg";`
- Line 12: `import aiEnhancedImage from "../../assets/images/ai_enhanced.jpg";`

**Then uncomment the image tags:**
- Line 22: `<img src={homeImage} ...` (Hero section background)
- Line 72: `<img src={musicalHeritageImage} ...` (Above "Tagore's Musical Heritage")
- Line 85: `<img src={vibrationalSoundImage} ...` (Above "Vibrational Sound Experiences")
- Line 98: `<img src={aiEnhancedImage} ...` (Above "AI-Enhanced Music Personalization")
- Line 159: `<img src={cognitiveEnrichmentImage} ...` (Right side of "Cognitive Enrichment")

---

### 4. `/src/app/components/pages/About.tsx`
**Uncomment:**
- Line 2: `import rabindranathTagoreImage from "../../assets/images/Rabindranath_tagore.jpg";`
- Line 171: `<img src={rabindranathTagoreImage} ...` (About Rabindranath Tagore section)

---

### 5. `/src/app/components/pages/Approach.tsx`
**Uncomment:**
- Line 3: `import musicalHeritageImage from "../../assets/images/musical_heritage.jpg";`
- Line 5: `import vibrationalSoundImage from "../../assets/images/vibrational_sound.jpg";`
- Line 7: `import aiEnhancedImage from "../../assets/images/ai_enhanced.jpg";`

**Then uncomment the image tags:**
- Line 62: `<img src={musicalHeritageImage} ...` (Above "Tagore's Musical Heritage")
- Line 73: `<img src={vibrationalSoundImage} ...` (Above "Vibrational Sound Experiences")
- Line 150: `<img src={aiEnhancedImage} ...` (Above "AI-Enhanced Music Personalization")

---

### 6. `/src/app/components/pages/Programs.tsx`
**Uncomment:**
- Line 3: `import programsImage from "../../assets/images/programs.jpg";`
- Line 5: `import communityEventImage from "../../assets/images/community_event.jpg";`

**Then uncomment the image tags:**
- Line 98: `<img src={programsImage} ...` (Below "Our Programs" heading)
- Line 185: `<img src={communityEventImage} ...` (Intergenerational Community Events)

---

### 7. `/src/app/components/pages/GetInvolved.tsx`
**Uncomment:**
- Line 4: `import socialImage from "../../assets/images/Social.jpg";`
- Line 195: `<img src={socialImage} ...` (Below "Follow Us" section)

---

## Quick Steps:

1. ✅ **Copy all 10 `.jpg` files** to `/src/assets/images/`
2. ✅ **Edit the 7 files listed above** and uncomment the lines
3. ✅ **Save all changes**
4. ✅ **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Add images and integrate with components"
   git push
   ```
5. ✅ **Vercel will auto-deploy** with all your images! 🎉

---

**Note:** Look for comments that say `// UNCOMMENT AFTER ADDING...` and `{/* UNCOMMENT AFTER ADDING... */}` in the code files.
