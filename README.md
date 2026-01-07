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

1. Add markdown file: `public/content/blogs/{category}/{slug}.md`
2. Add entry to the appropriate category array in `src/config/blogPosts.js`:
   ```javascript
   {
     title: 'Post Title',
     image: '/pictures/Blogs/image.jpg',
     description: 'Brief description',
     link: '/blog/{category}/{slug}',  // or 'url' for outreach
     markdownPath: '/content/blogs/{category}/{slug}.md',
     category: '{category}'
   }
   ```

Note: Category pages automatically import from `blogPosts.js`, so you only need to update one file.

### Add Images

Place images in `/public/pictures/` and reference them with `/pictures/filename.jpg`

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
