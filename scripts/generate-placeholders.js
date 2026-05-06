#!/usr/bin/env node

/**
 * This script generates placeholder images for the portfolio
 * Run with: node scripts/generate-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public', 'images');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate SVG placeholder function
function generateSVGPlaceholder(width, height, text, filename) {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f0f0f0"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#999" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;

  fs.writeFileSync(path.join(imagesDir, filename), svg);
  console.log(`✓ Created ${filename}`);
}

// Generate placeholders for 8 projects with 3 images each + thumbnails
const projects = [
  { id: 1, name: 'ELEDONE - A Place To Return To' },
  { id: 2, name: 'Prater Ateliers Wien' },
  { id: 3, name: 'MK Exit Sans' },
  { id: 4, name: 'ELEDONE - Of Many Moods' },
  { id: 5, name: 'MK Shapeshifter' },
  { id: 6, name: 'XING EP Artwork' },
  { id: 7, name: 'Wunderpunkt' },
  { id: 8, name: 'Superbude Wien' },
];

console.log('Generating placeholder images...\n');

projects.forEach(project => {
  // Generate thumbnail (4:3 aspect ratio - 800x600)
  generateSVGPlaceholder(800, 600, `${project.name}`, `project-${project.id}-thumb.svg`);
  
  // Generate detail images (16:10 aspect ratio - 1200x750)
  for (let i = 1; i <= 3; i++) {
    generateSVGPlaceholder(1200, 750, `${project.name} ${i}`, `project-${project.id}-${i}.svg`);
  }
});

console.log('\n✓ All placeholder images generated!');
console.log('Replace these SVG files with your actual images in public/images/');
