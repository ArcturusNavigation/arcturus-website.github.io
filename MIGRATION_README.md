# Arcturus Website Migration Guide

## Overview

The Arcturus website has been successfully migrated from raw HTML/CSS to a modern **React + Tailwind CSS + Vite** stack. This migration provides:

- **Modular Component Architecture**: Reusable components for consistent UI
- **Better Developer Experience**: Hot module replacement, fast builds
- **Consistent Styling**: Tailwind CSS for unified design system
- **Type-Safe Routing**: React Router for navigation
- **Easy Content Updates**: Structured page components

## Tech Stack

- **React 18.3.1**: UI library
- **Tailwind CSS 3.4.13**: Utility-first CSS framework
- **Vite 5.4.11**: Build tool and dev server
- **React Router DOM 6.23.1**: Client-side routing
- **React Markdown 9.0.3**: Markdown rendering for blog posts

## Project Structure

```
arcturus-website.github.io/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   ├── NotificationBar.jsx  # Top notification banner
│   │   └── BackToTop.jsx    # Scroll to top button
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Homepage
│   │   ├── Team.jsx        # Team members page
│   │   ├── About.jsx       # About page
│   │   ├── Sponsors.jsx    # Sponsors page
│   │   └── blog/           # Blog pages
│   │       ├── Autonomy.jsx
│   │       ├── Mechanical.jsx
│   │       ├── Electrical.jsx
│   │       ├── Outreach.jsx
│   │       ├── FishNShips.jsx
│   │       ├── Year22.jsx
│   │       └── Year23.jsx
│   ├── assets/
│   │   └── css/
│   │       └── index.css   # Global styles + Tailwind
│   ├── App.jsx             # Main app component with routing
│   └── main.jsx            # Application entry point
├── Pictures/               # Static assets (images, videos)
├── assets/                 # Original vendor assets (Bootstrap icons, etc.)
├── index-new.html          # New HTML entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

This will start the Vite dev server at `http://localhost:5173` (or another available port).

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

## Key Features

### Responsive Navigation

The Header component includes:
- Desktop navigation with dropdown menus
- Mobile-responsive hamburger menu
- Active link highlighting
- Sticky header that scrolls with the page

### Modular Layout

All pages use the `Layout` component which includes:
- Notification bar (donation banner)
- Header navigation
- Page content
- Footer
- Back to top button

### Tailwind CSS Configuration

Custom color palette matching the original design:
- Primary: `#08054e` (dark blue)
- Primary Light: `#637dc5` (light blue)
- Accent: `#56b8e6` (sky blue)
- Background Light: `#f0f5ff` (very light blue)
- Text: `#969696` (gray)

Custom fonts:
- Sans: Open Sans
- Heading: Raleway

## Current Migration Status

### ✅ Completed

1. **Project Setup**
   - React + Vite + Tailwind configuration
   - Development and build scripts
   - Basic folder structure

2. **Core Components**
   - Layout wrapper
   - Header with navigation
   - Footer with links and social media
   - Notification bar
   - Back to top button

3. **Home Page**
   - Hero video section
   - "What is Arcturus?" section with YouTube embed
   - "Meet Fish 'N Ships" section with carousel placeholder
   - "Our Design Process" cards (Autonomy, Electrical, Mechanical)

4. **Placeholder Pages**
   - Team Members
   - About Us
   - Sponsors
   - Blog: Autonomy
   - Blog: Mechanical
   - Blog: Electrical
   - Blog: Outreach
   - Blog: Fish 'N Ships
   - Blog: 2021-2022 Season
   - Blog: 2022-2023 Season

5. **Routing**
   - React Router setup with all main routes
   - Navigation links working

6. **Build System**
   - Successfully builds to production
   - All assets properly bundled

### 🚧 TODO - Remaining Work

#### High Priority

1. **Complete Page Migrations**
   - [ ] Migrate full content from `team.html` to `Team.jsx`
     - Add team member profiles/grid
     - Add headshot images
     - Add team roles and descriptions

   - [ ] Migrate full content from `about.html` to `About.jsx`
     - Add detailed about content
     - Add history and mission

   - [ ] Migrate full content from `contact.html` to `Sponsors.jsx`
     - Add sponsor logos grid
     - Add sponsorship tiers
     - Add contact form if needed

2. **Blog Page Migrations**
   - [ ] `Blogs/blog-autonomy.html` → `blog/Autonomy.jsx`
     - Migrate all autonomy sub-pages (perception, path planning, localization, controller)

   - [ ] `Blogs/blog-mechE.html` → `blog/Mechanical.jsx`
     - Migrate all mechanical sub-pages (hulls, mechanisms, propulsion, sensor mast, ee box)

   - [ ] `Blogs/blog-EE.html` → `blog/Electrical.jsx`
     - Migrate all electrical sub-pages (BMS, buck board, e-stop)

   - [ ] `Blogs/blog-outreach.html` → `blog/Outreach.jsx`
     - Migrate all outreach event pages

   - [ ] `Blogs/blog-fish-n-ships.html` → `blog/FishNShips.jsx`

   - [ ] `Blogs/year-22.html` → `blog/Year22.jsx`

   - [ ] `Blogs/year-23.html` → `blog/Year23.jsx`

3. **Interactive Components**
   - [ ] Implement image carousel on Home page (Fish 'N Ships section)
     - Currently shows only first image
     - Need to add carousel controls and auto-play

   - [ ] Create reusable Carousel component for other pages

   - [ ] Add proper image galleries where needed

4. **Styling Refinements**
   - [ ] Match exact colors and spacing from original
   - [ ] Ensure responsive behavior matches original
   - [ ] Add any missing CSS animations/transitions
   - [ ] Test on multiple screen sizes

#### Medium Priority

5. **Blog System Enhancement**
   - [ ] Create a blog content management system
     - Option 1: Use markdown files for blog posts
     - Option 2: Create a simple JSON-based CMS
     - Option 3: Use a headless CMS (Contentful, Sanity, etc.)

   - [ ] Create blog post template component
   - [ ] Add blog post metadata (date, author, category)
   - [ ] Implement blog filtering/categorization

6. **Navigation Enhancements**
   - [ ] Add breadcrumbs to blog pages
   - [ ] Improve mobile menu animations
   - [ ] Add keyboard navigation support

7. **Performance Optimization**
   - [ ] Implement lazy loading for images
   - [ ] Optimize video files
   - [ ] Add image optimization pipeline
   - [ ] Consider adding a CDN for assets

#### Low Priority

8. **SEO & Meta Tags**
   - [ ] Add proper meta descriptions to all pages
   - [ ] Implement Open Graph tags
   - [ ] Add Twitter card meta tags
   - [ ] Create sitemap.xml
   - [ ] Add robots.txt

9. **Deployment Setup**
   - [ ] Configure GitHub Pages deployment
     - Need to handle client-side routing
     - May need to add 404.html redirect

   - [ ] Set up CI/CD pipeline
   - [ ] Add deployment documentation

10. **Additional Features**
    - [ ] Add search functionality
    - [ ] Create contact form with backend
    - [ ] Add newsletter signup
    - [ ] Implement analytics (Google Analytics, Plausible, etc.)

## How to Add/Update Content

### Adding a New Page

1. Create a new component in `src/pages/`:
```jsx
import React from 'react'

const NewPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Page Title
        </h1>
        {/* Your content here */}
      </div>
    </div>
  )
}

export default NewPage
```

2. Add route in `src/App.jsx`:
```jsx
import NewPage from './pages/NewPage'

// In the Routes component:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `src/components/Header.jsx`

### Adding a New Blog Post

1. Create component in `src/pages/blog/YourPost.jsx`
2. Add route in `App.jsx`
3. Add link in Header dropdown or create a blog index page

### Updating Images

- Place images in `/Pictures/` directory
- Reference in components using `/Pictures/your-image.jpg`
- Vite will automatically handle the assets during build

### Styling Guidelines

Use Tailwind utility classes for consistency:
- Primary color: `text-primary`, `bg-primary`
- Headings: `font-heading`
- Container: `container mx-auto px-4`
- Sections: `py-12` or `py-16`
- Cards: `bg-white rounded-lg shadow-md`

## Migration from Old Site to New Site

### For Local Development

1. The new site runs on `index-new.html` (at `http://localhost:5173`)
2. The old site is still accessible via `index.html`
3. All old HTML files remain intact in case you need to reference them

### For Deployment

Once migration is complete:
1. Build the production version: `npm run build`
2. The `dist/` folder contains your production-ready site
3. Copy the contents of `dist/` to your web server root
4. Configure your server to handle client-side routing (redirect all routes to index.html)

For GitHub Pages:
- You may need to add a `404.html` file that redirects to `index.html`
- Or configure GitHub Actions to deploy from the `dist/` folder

## Tips for Future Development

1. **Component Reusability**: Extract repeated UI patterns into components
2. **Data Management**: Consider using React Context or a state management library for shared data
3. **Code Splitting**: Use React.lazy() for larger pages to improve load time
4. **Type Safety**: Consider migrating to TypeScript for better DX
5. **Testing**: Add Jest and React Testing Library for component tests

## Questions or Issues?

If you encounter any issues or have questions about the migration:
1. Check existing HTML files for reference
2. Review the Tailwind CSS documentation: https://tailwindcss.com/docs
3. Review React Router documentation: https://reactrouter.com
4. Check the Vite documentation: https://vitejs.dev

## Notes

- The original HTML files are preserved and can serve as reference
- All vendor assets (Bootstrap, icons, etc.) are still in the `assets/` directory
- The migration maintains the visual design as closely as possible
- Future content additions will be much easier with this new structure
