# airseen1 — Personal Portfolio

> Modern, minimalist, and fast personal portfolio website.

## 🌐 Live

[https://ibnuwu.github.io/airsenuwu/](https://ibnuwu.github.io/airsenuwu/)

## Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom Properties, mobile-first
- **JavaScript** — Vanilla ES6+
- **Inter** — Google Fonts
- **Lucide** — SVG Icons
- **Decap CMS** — Content management
- **GitHub Pages** — Hosting

## Folder Structure

```
airsenuwu/
├── index.html              # Main page
├── 404.html                # Custom 404 page
├── .nojekyll               # Bypass Jekyll on GitHub Pages
├── assets/
│   ├── css/
│   │   ├── variables.css   # Design tokens
│   │   ├── base.css        # Reset & global styles
│   │   ├── components.css  # Component styles
│   │   └── responsive.css  # Media queries
│   ├── js/
│   │   ├── app.js          # Main application logic
│   │   ├── tabs.js         # Tab navigation
│   │   └── utils.js        # Utility functions
│   ├── images/
│   │   ├── profile/        # Profile pictures
│   │   └── projects/       # Project thumbnails
│   └── icons/              # Favicon & app icons
├── content/
│   ├── projects/           # Project markdown files
│   ├── blog/               # Blog post markdown files
│   └── creative/           # Creative work files
└── admin/
    ├── index.html          # Decap CMS admin panel
    └── config.yml          # CMS configuration
```

## Development

Open `index.html` directly in a browser, or use any local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

## License

© 2025 airseen1. All rights reserved.
