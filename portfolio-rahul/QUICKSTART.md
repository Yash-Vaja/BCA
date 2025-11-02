# Quick Start Guide

## 🚀 Get Your Portfolio Running in 3 Steps

### Step 1: Install Dependencies
\`\`\`bash
cd portfolio-rahul
npm install
\`\`\`

### Step 2: Run Development Server
\`\`\`bash
npm run dev
\`\`\`

### Step 3: Open in Browser
Visit: **http://localhost:3000**

---

## 📝 Quick Customization Checklist

### Essential Updates (Do These First!)

#### 1. Update Contact Information
**File**: `app/components/Contact.tsx`
- [ ] Change email address (line ~30)
- [ ] Update phone number (line ~36)
- [ ] Verify location (line ~42)

#### 2. Update Social Media Links
**Files**: 
- `app/components/Contact.tsx` (lines ~50-80)
- `app/components/Footer.tsx` (lines ~50-90)

Update these URLs:
- [ ] GitHub profile
- [ ] LinkedIn profile
- [ ] Twitter profile

#### 3. Add Your Profile Picture
**File**: `app/components/Hero.tsx` (line ~100)

Steps:
1. Add your image to `public/` folder (e.g., `public/profile.jpg`)
2. Replace the placeholder div with:
\`\`\`tsx
<Image
  src="/profile.jpg"
  alt="Rahul Vishwakarma"
  fill
  className="object-cover"
/>
\`\`\`

#### 4. Update Projects
**File**: `app/components/Projects.tsx`
- [ ] Replace sample projects with your actual projects
- [ ] Add project links (GitHub, live demo)
- [ ] Update technologies used

#### 5. Adjust Skills & Levels
**File**: `app/components/Skills.tsx`
- [ ] Update skill proficiency levels
- [ ] Add new skills you've learned
- [ ] Remove skills you don't want to showcase

---

## 🎨 Theme Customization

### Change Color Scheme
**File**: `app/components/Hero.tsx`, `About.tsx`, etc.

Current gradients:
- Blue to Purple: `from-blue-600 to-purple-600`
- Blue to Cyan: `from-blue-500 to-cyan-500`
- Purple to Pink: `from-purple-500 to-pink-500`

Replace with your preferred colors!

### Modify Fonts
**File**: `app/layout.tsx`

Current: Inter font
Change to another Google Font:
\`\`\`tsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
});
\`\`\`

---

## 🔧 Common Tasks

### Add a New Section
1. Create component: `app/components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to the page layout

### Change Animation Speed
**Files**: All component files

Look for `transition={{ duration: 0.6 }}` and adjust the duration value.

### Disable Dark Mode
**File**: `app/page.tsx`

Remove or comment out:
\`\`\`tsx
<ThemeToggle />
\`\`\`

---

## 📦 Build & Deploy

### Build for Production
\`\`\`bash
npm run build
\`\`\`

### Test Production Build Locally
\`\`\`bash
npm start
\`\`\`

### Deploy to Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your portfolio is live! 🎉

---

## 🐛 Troubleshooting

### Build Errors
\`\`\`bash
# Clear cache and rebuild
rm -rf .next
npm run build
\`\`\`

### Port Already in Use
\`\`\`bash
# Use a different port
npm run dev -- -p 3001
\`\`\`

### Styling Not Working
\`\`\`bash
# Reinstall dependencies
rm -rf node_modules
npm install
\`\`\`

---

## 💡 Pro Tips

1. **Test on Mobile**: Use Chrome DevTools device emulation
2. **Check Performance**: Use Lighthouse in Chrome DevTools
3. **SEO**: Update metadata in `app/layout.tsx`
4. **Analytics**: Add Google Analytics or Vercel Analytics
5. **Forms**: Connect contact form to a service like Formspree or EmailJS

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

**Need Help?** Check the main README.md for detailed documentation!
