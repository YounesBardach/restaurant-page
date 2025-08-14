<p align="center">
  <img src="https://i.postimg.cc/yxtHJ7T9/Chat-GPT-Image-Aug-14-2025-05-06-07-AM.png" alt="Restaurant Page Banner" width="900" />
</p>

<div align="center">

## Restaurant Page (JavaScript + Webpack + ES6 Modules)

A dynamic restaurant homepage built with vanilla JavaScript, featuring tabbed
navigation and modular content loading for The Odin Project.

[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?logo=webpack&logoColor=black)](https://webpack.js.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Deploy](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?logo=github&logoColor=white)](https://younesbardach.github.io/restaurant-page/)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Scripts](#scripts)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)

---

## About

This project is part of The Odin Project JavaScript curriculum:
[The Odin Project — Project: Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).
It focuses on practicing DOM manipulation, ES6 modules, webpack bundling, and
creating a dynamic single-page application.

- Live app:
  [https://younesbardach.github.io/restaurant-page/](https://younesbardach.github.io/restaurant-page/)

## Features

- **Dynamic Content Loading**: JavaScript-only content generation with no
  hardcoded HTML
- **Tabbed Navigation**: Seamless switching between Home, Menu, and Contact
  pages
- **Modular Architecture**: Separate modules for each page component
- **Responsive Design**: Modern, clean interface with smooth transitions
- **Custom Styling**: Beautiful CSS with custom fonts and visual effects
- **Webpack Integration**: Modern build system with hot reloading
- **Asset Management**: Optimized handling of images, fonts, and CSS
- **Social Media Integration**: Facebook, Instagram, and Twitter links
- **Interactive Elements**: Hover effects and smooth user interactions

## Requirements

- Node.js 20+
- npm

## Quick start

```bash
# 1) Install dependencies
npm install

# 2) Start the development server
npm start

# 3) Build for production
npm run build

# Local development (webpack dev server)
# http://localhost:8080
```

## Scripts

- `npm start` — start webpack dev server with auto-open browser
- `npm run watch` — start webpack in watch mode for development
- `npm run build` — build for production with webpack
- `npm test` — placeholder for future testing setup

## Tech stack

- **Language:** Vanilla JavaScript (ES6+)
- **Build tool:** Webpack 5
- **Module system:** ES6 Modules
- **Styling:** CSS3 with normalize.css
- **Icons:** SVG icons for social media
- **Fonts:** Custom Italianno font for branding
- **Deployment:** GitHub Pages

## Project structure

```
restaurant-page/
├─ index.html
├─ package.json
├─ webpack.config.js
├─ src/
│  ├─ index.html
│  ├─ index.js
│  ├─ css/
│  │  ├─ normalize.css
│  │  ├─ home.css
│  │  ├─ menu.css
│  │  └─ contact.css
│  ├─ fonts/
│  │  └─ Italianno-Regular-OTF.otf
│  ├─ img/
│  │  ├─ pizza-favicon.png
│  │  ├─ pizlogo.png
│  │  ├─ wood-bg.jpg
│  │  ├─ flour.jpg
│  │  └─ various SVG icons
│  └─ pages/
│     ├─ home.js
│     ├─ menu.js
│     └─ contact.js
└─ dist/ (generated)
   ├─ index.html
   ├─ index.bundle.js
   ├─ images/
   └─ fonts/
```
