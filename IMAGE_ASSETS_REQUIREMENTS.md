# Image Assets Requirements

## Priority 1: Essential for Launch

### SEO & Branding

1. **Open Graph Image** (`/public/images/og-image.jpg`)
   - Dimensions: 1200 x 630 pixels
   - Format: JPG or PNG
   - Purpose: Social media sharing preview
   - Content: Hero shot of bakery or signature products
   - Text overlay: "Maple Hearth Bakery - Portland's Artisan Bakery"

2. **Favicon Set**
   - `/public/favicon.ico` (32x32, 16x16 multi-size)
   - `/public/icon.svg` (vector, scalable)
   - `/public/apple-touch-icon.png` (180x180px)
   - Design: Simple logo mark or "MH" monogram

3. **Web App Manifest** (`/public/site.webmanifest`)

   \`\`\`json
   {
     "name": "Maple Hearth Bakery",
     "short_name": "Maple Hearth",
     "icons": [
       {
         "src": "/android-chrome-192x192.png",
         "sizes": "192x192",
         "type": "image/png"
       },
       {
         "src": "/android-chrome-512x512.png",
         "sizes": "512x512",
         "type": "image/png"
       }
     ],
     "theme_color": "#8B4513",
     "background_color": "#FFFBF5",
     "display": "standalone"
   }
   \`\`\`

## Priority 2: Hero & Feature Images

### Homepage

4. **Hero Background** (`/public/images/hero-bakery.jpg`)
   - Current: Referenced but may not exist
   - Dimensions: 1920 x 1080 pixels (landscape)
   - Content: Warm bakery interior or fresh baked goods display
   - Quality: High resolution, professional

5. **Sourdough Feature** (`/public/images/sourdough-bread.jpg`)
   - ✓ Already referenced in Featured component
   - Content: Artisan sourdough loaf, close-up

6. **Custom Cake Showcase** (`/public/images/custom-cake-showcase.jpg`)
   - ✓ Already referenced in Promo component
   - Content: Beautiful custom cake(s)

7. **Bakery Interior** (`/public/images/bakery-interior.jpg`)
   - ✓ Already referenced in About page
   - Content: Warm, inviting shop interior

8. **Baker at Work** (`/public/images/baker-at-work.jpg`)
   - ✓ Already referenced in About page
   - Content: Baker crafting bread or pastries

## Priority 3: Menu Items

All menu items need professional food photography:

9. **Artisan Sourdough** (`/public/images/sourdough-bread.jpg`) ✓
10. **Butter Croissants** (`/public/images/croissants.jpg`)
11. **Chocolate Croissants** (`/public/images/chocolate-cake.jpg`)
    - Note: Currently using chocolate cake image for chocolate croissants
12. **Rosemary Focaccia** (`/public/images/focaccia.jpg`)
13. **Cinnamon Rolls** (`/public/images/cinnamon-rolls.jpg`)
14. **Mixed Berry Tart** (`/public/images/berry-tart.jpg`)
15. **French Macarons** (`/public/images/macarons.jpg`)

### Menu Item Photo Specifications

- Dimensions: 800 x 600 pixels (4:3 ratio)
- Format: JPG (optimized for web)
- Background: Neutral or wooden surface
- Lighting: Natural, soft, appetizing
- Style: Consistent across all items
- File size: Under 200KB each (optimized)

## Image Optimization Guidelines

### For Web Performance

- Use modern formats (WebP with JPG fallback)
- Implement responsive images with `srcset`
- Add `loading="lazy"` for below-fold images
- Compress images (aim for 70-80% quality)
- Use Next.js Image component (already implemented)

### Naming Convention

- Use lowercase
- Use hyphens for spaces
- Be descriptive
- Example: `sourdough-bread-closeup.jpg`

## Stock Photo Resources (If Needed)

If professional photography isn't immediately available:

1. **Unsplash** - Free high-quality images
   - Search: "artisan bread", "bakery", "pastries"
   - License: Free for commercial use

2. **Pexels** - Free stock photos
   - Good selection of food photography

3. **Pixabay** - Free images and vectors
   - Bakery and food categories

## Photography Tips (DIY Option)

If taking photos in-house:

- Use natural window light (morning/afternoon)
- Shoot in landscape orientation for hero images
- Keep background simple and uncluttered
- Show texture and detail (crust, layers)
- Include garnishes (herbs, flour dusting)
- Use rule of thirds for composition
- Take multiple angles of each item
- Edit for consistent color temperature

## Timeline Recommendation

**Before Launch:**

- Essential SEO images (Priority 1)
- Hero image
- At least 5 menu items with photos

**Within 2 Weeks Post-Launch:**

- Complete all menu item photography
- Additional bakery interior shots
- Team member photos

**Ongoing:**

- Seasonal specials photography
- Customer testimonial photos
- Behind-the-scenes content
- Event photos

---

## Quick Fix for Testing

If images aren't ready, you can:

1. Use placeholder services temporarily
2. Update image paths to use Lorem Picsum:
   - `https://picsum.photos/800/600?random=1`
3. Ensure Next.js Image component has proper `alt` text
4. Replace with real images before production launch

## Image Checklist Status

- [ ] og-image.jpg
- [ ] favicon.ico
- [ ] icon.svg
- [ ] apple-touch-icon.png
- [ ] site.webmanifest
- [ ] hero-bakery.jpg
- [ ] sourdough-bread.jpg ✓ (referenced)
- [ ] croissants.jpg
- [ ] chocolate-croissants.jpg (fix naming)
- [ ] focaccia.jpg
- [ ] cinnamon-rolls.jpg
- [ ] berry-tart.jpg
- [ ] macarons.jpg
- [ ] custom-cake-showcase.jpg ✓ (referenced)
- [ ] bakery-interior.jpg ✓ (referenced)
- [ ] baker-at-work.jpg ✓ (referenced)
