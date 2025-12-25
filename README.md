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
│   ├── assets/css/
│   │   └── index.css       # Global styles + Tailwind
│   ├── App.jsx             # Main app component with routing
│   └── main.jsx            # Application entry point
├── pictures/               # Static assets (images, videos)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Making Changes

### Add a New Page

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

### Add a Blog Post

1. Create component in `src/pages/blog/YourPost.jsx`
2. Add route in `App.jsx`
3. Add link in Header dropdown

### Add Images

Place images in `/pictures/` and reference them with `/pictures/filename.jpg`

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

### GitHub Pages

1. Build the production version: `npm run build`
2. The `dist/` folder contains your production-ready site
3. Add a `404.html` file that redirects to `index.html` for client-side routing support
4. Configure GitHub Actions to deploy from the `dist/` folder

### Other Hosting

1. Build: `npm run build`
2. Copy contents of `dist/` to your web server root
3. Configure server to redirect all routes to `index.html` (for client-side routing)

## Features

- Modern React component architecture
- Responsive navigation with mobile hamburger menu
- Active link highlighting
- Blog system with multiple categories
- Team and sponsor pages
- Hero video and YouTube embeds
- Image carousels
- Smooth scrolling and back-to-top functionality

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
