# AI Engineer Portfolio - Manav Shah

A stunning, futuristic personal portfolio website for an AI Engineer featuring a sci-fi aesthetic with dark theme, glowing neon gradients, glassmorphism effects, and smooth animations.

## 🚀 Features

- **Futuristic Design**: Dark theme with neon blue/purple/cyan gradients
- **Glassmorphism Effects**: Modern glass-like cards with backdrop blur
- **Particle Animations**: Interactive particle background system
- **Smooth Animations**: Framer Motion powered transitions
- **Fully Responsive**: Optimized for all devices
- **Modern Tech Stack**: React + Tailwind CSS + Framer Motion
- **Performance Optimized**: Fast loading and smooth interactions

## 🎨 Design Elements

- **Neural Network Background**: Animated particle system
- **Glowing Effects**: Neon borders and text shadows
- **Glassmorphism Cards**: Translucent cards with blur effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Animations**: Interactive elements with scale and glow effects
- **Futuristic Typography**: Orbitron, Exo 2, and Roboto Mono fonts

## 📱 Sections

1. **Hero Section**: Animated landing with particle background
2. **About Me**: Professional bio with timeline
3. **Skills**: Technical expertise with animated progress bars
4. **Projects**: Portfolio showcase with hover effects
5. **Publications**: Research papers and achievements
6. **Contact**: Interactive form with validation
7. **Footer**: Social links and quick navigation

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon components
- **TSParticles**: Particle animation system
- **React Particles**: Particle background integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-engineer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🌐 Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/ai-engineer-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to Netlify

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'neon-blue': '#00D4FF',
  'neon-purple': '#8B5CF6',
  'neon-cyan': '#06FFA5',
  'neon-pink': '#FF0080',
}
```

### Content

Update the following files to customize content:

- `src/components/Hero.js` - Hero section content
- `src/components/About.js` - About section and timeline
- `src/components/Skills.js` - Skills and technologies
- `src/components/Projects.js` - Project portfolio
- `src/components/Publications.js` - Research publications
- `src/components/Contact.js` - Contact information

### Images

Replace placeholder images in the `public` folder:

- `favicon.ico` - Website favicon
- `logo192.png` - App logo (192x192)
- `logo512.png` - App logo (512x512)

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Lazy Loading**: Components load as they enter viewport
- **Optimized Images**: Compressed and optimized assets
- **Code Splitting**: Automatic code splitting with React
- **PWA Ready**: Service worker and manifest included

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Manav Shah**
- Email: manav.shah@example.com
- LinkedIn: [linkedin.com/in/manavshah](https://linkedin.com/in/manavshah)
- GitHub: [github.com/manavshah](https://github.com/manavshah)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [TSParticles](https://particles.js.org/) for particle effects
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Google Fonts](https://fonts.google.com/) for typography

---

⭐ Star this repository if you found it helpful!
