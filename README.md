# Design Portfolio

A minimalist, responsive design portfolio built with Next.js, TypeScript, and Tailwind CSS. Inspired by clean, modern portfolio aesthetics with smooth animations and an intuitive user experience.

## Features

- ✨ **Minimalist Design** - Clean, professional aesthetic focusing on your work
- 🎨 **Project Grid** - Responsive grid layout showcasing portfolio projects
- 📱 **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Next.js App Router for optimal speed
- 🎭 **Smooth Animations** - Powered by Framer Motion for elegant transitions
- 📄 **Dynamic Routes** - Individual project detail pages with navigation
- 💼 **About Page** - Showcase your principles, values, and contact information
- 🔍 **SEO Ready** - Proper metadata and semantic HTML structure

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Generate placeholder images** (already done)
   ```bash
   node scripts/generate-placeholders.js
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
mk/
├── app/                    # Next.js App Router pages
│   ├── info/              # About/Info page
│   ├── projects/[slug]/   # Dynamic project detail pages
│   ├── layout.tsx         # Root layout with Navigation & Footer
│   ├── page.tsx           # Home page with project grid
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer with links
│   ├── ProjectGrid.tsx    # Project grid layout
│   ├── ProjectCard.tsx    # Individual project card
│   └── PageTransition.tsx # Animation wrapper
├── lib/                   # Utility code and data
│   ├── types.ts           # TypeScript interfaces
│   └── projects.ts        # Project data
├── public/                # Static assets
│   └── images/            # Project images
└── scripts/               # Utility scripts
    └── generate-placeholders.js
```

## Customization

### 1. Add Your Projects

Edit `lib/projects.ts` to add your own projects:

```typescript
{
  id: '1',
  slug: 'your-project-slug',
  title: 'Your Project Title',
  category: 'Category',
  year: '2026',
  thumbnail: '/images/your-thumb.jpg',
  description: 'Your project description...',
  images: [
    '/images/your-image-1.jpg',
    '/images/your-image-2.jpg',
  ],
  tags: ['Tag1', 'Tag2'],
  details: {
    client: 'Client Name',
    role: 'Your Role',
    deliverables: ['Item 1', 'Item 2'],
  },
}
```

### 2. Add Your Images

Replace the placeholder images in `public/images/` with your actual project images:
- **Thumbnails**: 4:3 aspect ratio (e.g., 800x600px)
- **Detail images**: 16:10 aspect ratio (e.g., 1200x750px)

Supported formats: JPG, PNG, WebP, AVIF

### 3. Update About Page

Edit `app/info/page.tsx` to add your personal information:
- Introduction text
- Principles/values
- Contact information
- Social media links

### 4. Customize Contact Details

Update contact information in:
- `app/info/page.tsx` - About page contact section
- `components/Footer.tsx` - Footer links

### 5. Adjust Styling

Modify `app/globals.css` for global style changes or use Tailwind utilities in components.

## Building for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js.

## Performance Optimization

- ✅ Next.js Image component for automatic optimization
- ✅ Code splitting and lazy loading
- ✅ Font optimization with `next/font`
- ✅ Static generation for all routes
- ✅ Efficient CSS with Tailwind

## Credits

- Design inspiration: [klaffensteiner.com](https://klaffensteiner.com/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
