# Image Placement Guide

Quick reference for where generated images should be placed in the application.

## 📍 Image Locations & File Names

### Image 1: AI Interview Reality
- **File:** `/public/images/ai-reality.jpg`
- **Component:** `components/sections/Stats.tsx` (line ~10)
- **Current:** Gray placeholder with image icon
- **Replace with:**
```tsx
<img
  src="/images/ai-reality.jpg"
  alt="Software developer using GitHub Copilot and ChatGPT at modern workspace"
  className="w-full h-full object-cover"
/>
```

---

### Image 2: The AI Interview Challenge (Good vs Bad)
- **File:** `/public/images/interview-challenge.jpg`
- **Component:** `components/sections/ForWho.tsx` (line ~18)
- **Current:** Gradient placeholder with image icon
- **Replace with:**
```tsx
<img
  src="/images/interview-challenge.jpg"
  alt="Split screen comparison of good vs bad AI usage in interviews"
  className="w-full h-full object-cover"
/>
```

---

### Image 3: Playground Interface
- **File:** `/public/images/playground-interface.jpg`
- **Component:** `components/sections/PlaygroundFeature.tsx` (line ~32)
- **Current:** Purple gradient placeholder
- **Replace with:**
```tsx
<img
  src="/images/playground-interface.jpg"
  alt="Screenshot of AI Interview Playground interface with sidebar and comparison view"
  className="w-full h-full object-cover"
/>
```

---

### Image 4: Code Review Example
- **File:** `/public/images/code-review-example.jpg`
- **Component:** `components/sections/Playground.tsx` (line ~31)
- **Current:** Green-red gradient placeholder
- **Replace with:**
```tsx
<img
  src="/images/code-review-example.jpg"
  alt="Split screen showing good vs bad code review of AI-generated authentication code"
  className="w-full h-full object-cover"
/>
```

---

## 🚀 Quick Setup Steps

1. **Generate Images** using prompts from `VEO_VIDEO_PROMPTS.md`
2. **Optimize Images** with TinyPNG or ImageOptim (target <500KB each)
3. **Create Directory:** `mkdir -p public/images`
4. **Save Images** with the filenames above
5. **Replace Placeholders** in the components listed above
6. **Test:** Run `npm run dev` and verify images load correctly

---

## 🎨 Image Requirements Summary

| Image | Dimensions | Focus | Priority |
|-------|-----------|-------|----------|
| #1 AI Reality | 1920x1080 | Developer using AI tools naturally | Medium |
| #2 Interview Challenge | 1920x1080 | Good vs bad split-screen | **HIGH** |
| #3 Playground UI | 1920x1080 | Screenshot of interface | Medium |
| #4 Code Review | 1920x1080 | Code with/without annotations | **HIGH** |

---

## 💡 Tips for Best Results

1. **Priority Order:** Generate Image 4 and Image 2 first (highest impact)
2. **Consistency:** Use similar color grading across all images
3. **Readability:** Code in images should be legible at normal viewing size
4. **Professional:** All images should feel polished and production-ready
5. **Accessibility:** Always include descriptive alt text

---

## 🔄 Iterating on Prompts

If generated images don't match expectations:

**Too busy/cluttered:**
- Use the "Alternative Prompt (Simpler)" versions
- Add "minimal, clean, simple composition" to prompt

**Not photorealistic enough:**
- Add "photorealistic, 4K quality, professional photography"
- Try different AI tools (Veo 3.1 tends to be more realistic than Midjourney)

**Colors off:**
- Specify exact colors: "soft green #22c55e tint" or "subtle red #ef4444 tint"
- Add "color grading" to prompt

**Code not readable:**
- Add "large font, clearly readable code, high contrast"
- Consider using actual screenshots instead for Image 3

---

## 📝 Alternative: Use Your Own Screenshots

For **Image 3 (Playground Interface)**, you can:

1. Build and run the app: `npm run dev`
2. Navigate to `http://localhost:4000/playground`
3. Use browser full-screen mode
4. Take screenshot at 1920x1080 resolution
5. Crop to show the best parts of the interface
6. This guarantees accuracy!
