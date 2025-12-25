# 🎂 Birthday Celebration Website

A beautiful, modern, and responsive birthday celebration website built with React. Features a premium glassmorphism design, smooth animations, and dynamic countdown timer.

![React](https://img.shields.io/badge/React-16.13.1-blue)
![Material-UI](https://img.shields.io/badge/Material--UI-1.4.3-purple)

## ✨ Features

- **Dynamic Birthday Countdown** - Automatically updates to the next birthday (September 16th) each year
- **Premium Glassmorphism UI** - Modern design with blur effects and gradients
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Engaging reveal animations using react-reveal
- **Lazy Loading** - Code splitting for faster initial load times
- **Image Carousel** - Beautiful full-screen hero section with slick carousel
- **Interactive Navigation** - Smooth scroll to sections

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd the_venue

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Building for Production

```bash
# Create optimized production build
npm run build
# or
yarn build
```

The build folder will contain optimized, minified files ready for deployment.

## 🌐 Deployment

### Deploy to Surge (Recommended - Already Configured)

This project is pre-configured for Surge deployment.

```bash
# One-command deployment
npm run deploy
# or
yarn deploy
```

This will:
1. Build the production version
2. Rename `index.html` to `200.html` (for SPA routing)
3. Deploy to Surge

### First-time Surge Setup

If you haven't used Surge before:

```bash
# Install Surge globally (if not already installed)
npm install -g surge

# Login or create account
surge login
```

### Deploy to Other Platforms

#### Netlify
1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

#### Vercel
```bash
npm i -g vercel
vercel
```

#### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts: "deploy-gh": "gh-pages -d build"
npm run build
npm run deploy-gh
```

## 🎯 Performance Optimizations Applied

- **Code Splitting**: Components are lazy-loaded using `React.lazy()` for faster initial load
- **Image Optimization**: Background images load efficiently
- **Font Preloading**: Google Fonts are preconnected for faster loading
- **CSS Variables**: Efficient styling with CSS custom properties
- **Debounced Events**: Resize handlers are debounced for better performance
- **Passive Event Listeners**: Scroll events use passive listeners

## 📱 Responsive Breakpoints

| Device | Width |
|--------|-------|
| Mobile (Small) | < 576px |
| Mobile (Landscape) | 576px - 767px |
| Tablet | 768px - 991px |
| Desktop | > 992px |

## 🛠️ Tech Stack

- **React 16.13.1** - UI Library
- **Material-UI** - Component Library
- **React Slick** - Carousel Component
- **React Reveal** - Animation Library
- **React Scroll** - Smooth Scrolling
- **Surge** - Static Site Hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── featured/        # Hero section with carousel & countdown
│   │   ├── Carrousel.js
│   │   ├── Countdown.js
│   │   └── index.js
│   ├── header_footer/   # Navigation components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── SideDrawer.js
│   ├── highlights/      # About section
│   │   ├── Description.js
│   │   ├── Discounts.js
│   │   └── index.js
│   ├── location/        # Map section
│   ├── pricing/         # Favorites section
│   ├── utils/           # Reusable components
│   │   └── MyButton.js
│   └── venue_info/      # Event info cards
├── resources/
│   ├── images/          # Image assets
│   │   └── icons/
│   └── styles.css       # Global styles
├── App.js               # Main app component
└── index.js             # Entry point
```

## 🎨 Customization

### Changing Colors
Edit CSS variables in `src/resources/styles.css`:

```css
:root {
    --primary-color: #ff4800;      /* Orange - main accent */
    --primary-dark: #d93d00;       /* Darker orange */
    --secondary-color: #ffa800;    /* Yellow/Gold */
    --dark-bg: #1a1a2e;            /* Dark background */
    --darker-bg: #16213e;          /* Darker background */
}
```

### Changing Birthday Date
Edit `src/components/featured/Countdown.js`:
```javascript
const birthMonth = 8;    // September (0-indexed, so 8 = September)
const birthDay = 16;     // Day of month
const birthYear = 1997;  // Birth year for age calculation
```

### Changing Venue Info
Edit `src/components/venue_info/index.js`:
- Update the party time
- Update the location address

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm run deploy` | Build and deploy to Surge |
| `npm test` | Run test suite |

## 🔧 Troubleshooting

### Build Issues
```bash
# Clear npm cache and reinstall
rm -rf node_modules
npm cache clean --force
npm install
```

### Deployment Issues
```bash
# Make sure you're logged into Surge
surge login

# If domain is taken, update CNAME in public folder
```

## 📄 License

This project is private and created with love ❤️

---

Made with 💖 by Gaurav
