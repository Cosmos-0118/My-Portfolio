# My Portfolio

Personal developer portfolio site built with HTML, SCSS, and modern JavaScript tooling. The layout, animations, and component structure are adapted from the excellent [Simplefolio template by Jacobo Martinez](https://github.com/cobiwave/simplefolio).

## Features

- Responsive single-page layout with hero, projects, about, and contact sections
- Smooth scroll animations powered by ScrollReveal and Vanilla Tilt
- Bootstrap utilities with custom SCSS overrides for easy theming
- Parcel bundler for fast local development and optimized production builds

## Tech Stack

- HTML5 and ES6 modules
- SCSS (compiled with Parcel and `@parcel/transformer-sass`)
- Bootstrap 5 and custom components
- ScrollReveal, Vanilla Tilt, and Popper.js for interactive effects

## Project Structure

- `src/index.html`: Entry point for the portfolio
- `src/styles.scss`: Main stylesheet importing the SCSS partials under `src/sass`
- `src/scripts/`: JavaScript modules for scroll reveal and tilt animations
- `src/assets/` and `src/data/`: Images, icons, and configuration data

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server with automatic rebuilds:
   ```bash
   npm start
   ```
   Parcel serves the site at `http://localhost:1234` by default.
3. Build the optimized production bundle when you are ready to deploy:
   ```bash
   npm run build
   ```

## Customization Tips

- Update the content in `src/index.html` and the data files under `src/data/` to personalize copy and projects.
- Adjust colors, typography, and spacing in the SCSS partials within `src/sass/`.
- Replace images and icons inside `src/assets/` with your own branding.

## Deployment

Any static hosting provider will work (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). After running `npm run build`, deploy the generated files from the `dist/` directory.

## Credits

This project takes heavy inspiration from the work of [Jacobo Martinez](https://github.com/cobiwave). Be sure to check out his original Simplefolio template. This portfolio is built upon the Simplefolio template with significant customization to match my personal style and development preferences.

## Licensing

- Code in this repository is released under the MIT License (see `LICENSE.md`).
- All personal content—including text copy, images, resume files, and contact details—is provided for reference only and may not be reused without explicit permission from Dhanush S.
