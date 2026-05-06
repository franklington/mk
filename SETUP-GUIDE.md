# Portfolio Setup Guide

## What Was Built

A complete, functional Next.js design portfolio inspired by klaffensteiner.com with **real project data** fetched from the reference website.

✅ **Home Page** - Project grid with 8 actual projects from klaffensteiner.com
✅ **About/Info Page** - Personal introduction, principles, and contact information  
✅ **Project Detail Pages** - Individual pages for each project with image galleries
✅ **Navigation** - Clean header with logo and INFO link
✅ **Footer** - Contact links and copyright
✅ **Animations** - Smooth page transitions and hover effects using Framer Motion
✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Placeholder Images** - SVG placeholders generated for all 8 projects

## Current Projects (Fetched from klaffensteiner.com)

1. **ELEDONE — A Place To Return To** (2023) - Album Artwork
2. **Prater Ateliers Wien** (2023) - Logo Design
3. **MK Exit Sans** (2023) - Type Design
4. **ELEDONE — Of Many Moods** (2022) - Album Artwork
5. **MK Shapeshifter** (2022) - Type Design
6. **XING — EP Vinyl Artwork** (2021) - Cover Artwork
7. **Wunderpunkt** (2021) - UI/UX Design
8. **Superbude Wien** (2021) - Wallpaper Design

## Current Status

🟢 **Development server running at**: http://localhost:3001

## Next Steps

### 1. Add Your Content

Replace the placeholder content with your own:

**Projects** ([lib/projects.ts](lib/projects.ts))
- Update project titles, descriptions, categories, and years
- Modify project details (client, role, deliverables)
- Keep the same data structure

**About Page** ([app/info/page.tsx](app/info/page.tsx))
- Update the introduction paragraph
- Customize your principles/values (currently 5 principles)
- Add your actual contact information
- Update social media links

**Contact Info**
- [app/info/page.tsx](app/info/page.tsx) - Lines 64-79 (email, Instagram, location)
- [components/Footer.tsx](components/Footer.tsx) - Lines 7-20 (email, Instagram)

### 2. Add Your Images

Replace placeholder images in `public/images/`:

**Current placeholders:**
- `project-1-thumb.jpg` through `project-6-thumb.jpg` (thumbnails)
- `project-1-1.jpg` through `project-6-3.jpg` (detail images)

**Image guidelines:**
- **Thumbnails**: 4:3 aspect ratio (recommended: 800x600px or 1200x900px)
- **Detail images**: 16:10 aspect ratio (recommended: 1200x750px or 1600x1000px)
- **Formats**: JPG, PNG, WebP, or AVIF
- **File sizes**: Optimize for web (aim for under 500KB per image)

**To add new projects with images:**
1. Add new images to `public/images/`
2. Update [lib/projects.ts](lib/projects.ts) with new project data
3. Reference your images using `/images/your-image-name.jpg`

### 3. Customize Styling (Optional)

**Colors & Theme** ([app/globals.css](app/globals.css))
- Change `--background` and `--foreground` color variables
- Add custom CSS rules

**Typography**
- Current font: Geist (modern, clean sans-serif)
- To change: Update font imports in [app/layout.tsx](app/layout.tsx)

**Component Styles**
- Update Tailwind classes directly in component files
- All components use Tailwind CSS utilities

### 4. Update Metadata for SEO

**Site Metadata** ([app/layout.tsx](app/layout.tsx) - Lines 19-22)
```typescript
export const metadata: Metadata = {
  title: "Your Name - Design Portfolio",
  description: "Your custom description",
};
```

### 5. Test Your Changes

1. **View in browser**: http://localhost:3001
2. **Test navigation**: Click between home, info page, and project details
3. **Test responsive design**: Resize browser or use DevTools device toolbar
4. **Check all projects**: Click each project card to view detail pages

### 6. Deploy to Production

**Option A: Deploy to Vercel (Recommended)**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

**Option B: Build locally**
```bash
npm run build
npm run start
```

## Project Structure Reference

```
/Users/franz/Projects/mk/
├── app/
│   ├── layout.tsx              # Root layout with Navigation & Footer
│   ├── page.tsx                # Home page (project grid)
│   ├── globals.css             # Global styles
│   ├── info/
│   │   └── page.tsx            # About/Info page
│   └── projects/[slug]/
│       └── page.tsx            # Dynamic project detail pages
├── components/
│   ├── Navigation.tsx          # Header navigation
│   ├── Footer.tsx              # Footer
│   ├── ProjectGrid.tsx         # Project grid container
│   ├── ProjectCard.tsx         # Individual project card
│   └── PageTransition.tsx      # Animation wrapper
├── lib/
│   ├── types.ts                # TypeScript interfaces
│   └── projects.ts             # ⭐ PROJECT DATA - Edit this!
├── public/
│   └── images/                 # ⭐ REPLACE WITH YOUR IMAGES
│       ├── project-1-thumb.jpg
│       ├── project-1-1.jpg
│       └── ...
└── scripts/
    └── generate-placeholders.js
```

## Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Create production build
npm run start        # Run production build locally

# Utilities
npm run lint         # Check code quality
node scripts/generate-placeholders.js  # Regenerate placeholders
```

## Features Overview

### Navigation
- **Fixed header** that stays visible while scrolling
- **Simple two-link menu**: Logo (home) + INFO link
- **Active state** indication on INFO page

### Home Page
- **3-column grid** on desktop (responsive: 2 columns on tablet, 1 on mobile)
- **Hover effects** on project cards (image zoom, overlay)
- **Staggered animations** (cards fade in sequentially)

### Project Detail Pages
- **Hero section** with title, category, and year
- **Project description** and details (client, role, deliverables)
- **Image gallery** with optimized loading
- **Navigation** to previous/next projects
- **Back to home** link

### Info Page
- **Introduction** section
- **5 principles** with descriptions
- **Values statement**
- **Contact section** with email, social, location

### Responsive Breakpoints
- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

## Troubleshooting

**Dev server not starting?**
- Check if another process is using the port
- Try `npm run dev` again

**Images not showing?**
- Ensure images are in `public/images/` folder
- Check file names match those in [lib/projects.ts](lib/projects.ts)
- Next.js requires exact paths (case-sensitive)

**Build errors?**
- Run `npm run build` to see detailed errors
- Check TypeScript types in component files
- Ensure all imports are correct

**Styling looks broken?**
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/

---

**Ready to customize!** Start by updating [lib/projects.ts](lib/projects.ts) with your actual project data.
