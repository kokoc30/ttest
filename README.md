# RFCE - Senior Living Community Website

A professional, front-end only website built with pure HTML5, CSS3, and vanilla JavaScript. No frameworks, no build process, no external dependencies - everything runs directly by opening `index.html` in any modern web browser.

## 🚀 Quick Start

1. **Open the Website**: Simply double-click `index.html` to launch the site in your default browser
2. **Navigate**: Use the header navigation to explore all four pages
3. **Experience**: Try the interactive features like the gallery lightbox, blog modal, and contact form

## 📁 File Structure

```
DEMO5/
├── index.html          # Home page
├── gallery.html        # Photo gallery with lightbox
├── blog.html          # Blog with search and modal
├── contact.html       # Contact form
├── README.md          # This file
└── assets/
    ├── css/
    │   └── styles.css  # All styles (variables, layout, components)
    ├── js/
    │   └── app.js      # All JavaScript functionality
    └── img/
        └── fallback.jpg # Local fallback image
```

## ✨ Features

### Design & Accessibility
- **Premium Senior-Living Design**: Calm greens, generous whitespace, elegant typography
- **Dark Mode**: Toggle theme with persistent localStorage storage
- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **Accessible**: Keyboard navigation, focus management, ARIA labels, high contrast ratios
- **Reduced Motion Support**: Respects `prefers-reduced-motion` settings

### Interactive Components
- **Scroll Reveal**: Smooth fade-up animations on scroll
- **Gallery Lightbox**: Full-screen image viewing with keyboard navigation (ESC, arrow keys)
- **Tag Filtering**: Filter gallery and blog content by categories
- **Blog Modal**: Read full articles in an overlay with lightbox support for images
- **Search**: Real-time blog search functionality
- **Contact Form**: Client-side validation with success notifications
- **Image Fallback**: Automatic fallback to local image if remote URLs fail

### Performance Optimizations
- **Lazy Loading**: All images use `loading="lazy"` and `decoding="async"`
- **No External Dependencies**: No CDNs, frameworks, or external scripts
- **Optimized Images**: Uses appropriate image sizes and formats
- **Minimal File Count**: Only 7 total files for the entire site

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `assets/css/styles.css`:

```css
:root {
  --primary-green: #6b8e6b;      /* Main brand color */
  --secondary-green: #8fa68f;    /* Hover states */
  --light-green: #a8c4a8;        /* Accents and tags */
  --neutral-cream: #f8f6f3;      /* Background color */
  --text-primary: #2d2c2b;       /* Main text */
  /* ... more variables ... */
}
```

### Updating Images
1. **Gallery Images**: Edit the `galleryImages` array in `assets/js/app.js`
2. **Blog Images**: Edit the `blogPosts` array in `assets/js/app.js`
3. **Hero Image**: Update the CSS background-image URL in the `.hero` class
4. **Fallback Image**: Replace `assets/img/fallback.jpg` with your own image

### Modifying Content
- **Blog Posts**: Edit the `blogPosts` array in `assets/js/app.js`
- **Gallery Items**: Edit the `galleryImages` array in `assets/js/app.js`
- **Contact Information**: Update footer content in all HTML files
- **Site Name**: Change "RFCE" throughout the HTML files

## 🔧 Technical Details

### Browser Support
- Modern browsers (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Progressive enhancement ensures basic functionality in older browsers
- No polyfills required for target demographic

### File Protocol Compatibility
- All functionality works over `file://` protocol
- No server required for development or deployment
- No CORS issues or external dependencies

### Validation & Standards
- Valid HTML5 markup
- Semantic HTML structure
- CSS3 with modern features (CSS Grid, Flexbox, Custom Properties)
- JavaScript ES6+ with fallbacks

## 📱 Pages Overview

### Home (`index.html`)
- Hero section with call-to-action buttons
- Highlights section with 4 feature cards
- Lifestyle gallery preview (6 images)
- Latest blog posts preview (3 articles)

### Gallery (`gallery.html`)
- 12 responsive gallery images with lazy loading
- Filter by categories: All, People, Places, Wellness, Dining
- Full-screen lightbox with keyboard navigation
- Automatic image fallback system

### Blog (`blog.html`)
- 6 blog posts with cover images
- Real-time search functionality
- Tag-based filtering
- Modal overlay for reading full articles
- Images in articles open in lightbox

### Contact (`contact.html`)
- Contact form with validation
- Success/error toast notifications
- Contact information cards
- Call-to-action sections

## 🎯 Accessibility Features

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Focus Management**: Visible focus indicators and logical tab order
- **Screen Reader Support**: Proper heading hierarchy and ARIA labels
- **Color Contrast**: Meets WCAG AA standards (4.5:1 minimum)
- **Motion Sensitivity**: Respects `prefers-reduced-motion` setting
- **Font Scaling**: Responsive typography that scales with user preferences

## 🚀 Deployment Options

1. **Static Hosting**: Upload files to any static host (Netlify, Vercel, GitHub Pages)
2. **Local Network**: Place in web server document root
3. **File Sharing**: Zip and share - recipients can open index.html directly
4. **CD/USB Distribution**: Burns to disc or copies to USB drives

## 🛠 Development Notes

- **No Build Process**: Direct file editing - refresh browser to see changes
- **CSS Organization**: Variables, base styles, components, utilities, responsive
- **JavaScript Structure**: Modular object with clear separation of concerns
- **Image Strategy**: Mix of Unsplash URLs with local fallbacks
- **Performance**: Minimal DOM manipulation, efficient event delegation

## 📞 Support

For questions about customization or technical issues:
- Review the code comments for implementation details
- All interactive features are documented in `assets/js/app.js`
- CSS variables make theming straightforward
- HTML structure follows semantic best practices

---

**RFCE** - Designed with care for our community. This website demonstrates modern web development practices while maintaining simplicity and accessibility for all users.