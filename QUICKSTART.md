# Quick Start Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173` (or the next available port)

3. **Build for Production**
   ```bash
   npm run build
   ```

   The production files will be in the `dist/` directory

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

## Making Changes

### Edit Content

All page content is in `src/pages/`. Edit the JSX files to update content.

### Update Styling

- Global styles: `src/assets/css/index.css`
- Component-specific: Use Tailwind classes inline
- Theme colors: Edit `tailwind.config.js`

### Add New Pages

1. Create file in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

### Add Images

Place images in `/Pictures/` and reference them with `/Pictures/filename.jpg`

## Project Status

This is a **partial migration** from the old HTML site to React + Tailwind.

✅ **Complete:**
- Project setup and build system
- Core reusable components (Header, Footer, Layout)
- Home page with main sections
- Routing setup
- All page placeholders

🚧 **TODO:**
- Migrate full content from old blog pages
- Implement image carousel
- Add team member profiles
- Complete sponsor page content
- Set up deployment

See `MIGRATION_README.md` for the complete migration guide and detailed TODO list.

## Need Help?

- Check `MIGRATION_README.md` for detailed documentation
- Reference the old HTML files in the root directory
- Tailwind docs: https://tailwindcss.com/docs
- React Router docs: https://reactrouter.com
