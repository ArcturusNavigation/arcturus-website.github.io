# Arcturus Website

A modern React + Tailwind CSS website for the Arcturus robotics team, built with Vite.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
Production files will be in the `dist/` directory

### 4. Preview Production Build
```bash
npm run preview
```

## Project Details

### Add a Blog Post

1. Put markdown file with blog in `public/content/blogs/subteam/blog-name.md`
2. Create component in `src/pages/blog/subteam/blog-name.jsx` for the blog card
3. Add blog to respective subteam's page in `src/pages/blog/Subteam.jsx`

### Add Images

Place images in `/public/Pictures/` and reference them with `/Pictures/filename.jpg`

### Styling Guidelines

Use Tailwind utility classes for consistency:
- Primary color: `text-primary`, `bg-primary`
- Headings: `font-heading`
- Container: `container mx-auto px-4`
- Sections: `py-12` or `py-16`
- Cards: `bg-white rounded-lg shadow-md`

### Custom Theme Colors

- Primary: `#08054e` (dark blue)
- Primary Light: `#637dc5` (light blue)
- Accent: `#56b8e6` (sky blue)
- Background Light: `#f0f5ff` (very light blue)
- Text: `#969696` (gray)

Custom fonts:
- Sans: Open Sans
- Heading: Raleway

## Deployment

Run `npm run deploy`. This generates `dist/` folder which contains the build and pushes the contents to the branch `gh-pages`. GH pages is setup to deploy from that branch to `arcturus.mit.edu`. 

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
