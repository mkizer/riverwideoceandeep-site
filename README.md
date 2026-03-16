# River Wide Ocean Deep Website

This project is a static site built using [Astro v6](https://astro.build/). It is live at [riverwideoceandeep.com](https://riverwideoceandeep.com). It serves as a migration from a previous WordPress site, leveraging modern web development tooling, static site generation, and optimized content delivery.

## 🚀 Overview & Processes Followed

The creation of this project followed several key steps:
1. **Astro Project Initialization**: Starting with a clean Astro v6 template to ensure top-notch performance.
2. **Tailwind CSS v4 Integration**: Configuring Tailwind CSS using the modern `@tailwindcss/vite` plugin for rapid and responsive styling.
3. **Content Collections Setup**: Structuring blog posts within `src/content/blog/` utilizing Astro's Content Collections (`src/content.config.ts`) and Zod for frontmatter validation.
4. **Markdown & MDX Support**: Integrating `@astrojs/mdx` to allow complex layouts, interactive components (like `<YouTube />`), and component embeds within Markdown files. Note the use of `{"<!--more-->"}` in MDX files as the excerpt break marker.
5. **SEO & Discovery**: Setting up `@astrojs/sitemap` and `@astrojs/rss` to automatically generate sitemaps and RSS feeds.

## 📦 Software & Dependencies

Make sure your environment meets the minimum requirements:
- **Node.js**: `>= 22.12.0`
- **Package Manager**: npm (or your preferred manager: pnpm/yarn)

**Key Dependencies**:
- [Astro](https://docs.astro.build/) (`astro`): The core web framework.
- [Tailwind CSS](https://tailwindcss.com/docs) (`tailwindcss`, `@tailwindcss/vite`): Utility-first CSS framework.
- [MDX](https://mdxjs.com/) (`@astrojs/mdx`): Markdown for the component era.
- [YouTube Embeds](https://github.com/astro-community/astro-embed) (`@astro-community/astro-embed-youtube`): Optimized YouTube embedding.

## 📁 Project Structure

Below is an overview of the important directories in the project:

```text
/
├── public/                 # Static assets (favicon, direct downloads, etc.) served at the root path.
├── src/
│   ├── assets/             # Uncompiled CSS, fonts, and images optimizing by Astro during build.
│   ├── components/         # Reusable Astro, React, or Vue UI components (e.g., Header, Footer).
│   ├── layouts/            # Page layout templates to keep structural consistency.
│   ├── pages/              # File-based routing. Every `.astro` or `.md` file here becomes a page URL.
│   ├── content/            # Astro Content Collections.
│   │   └── blog/           # Markdown and MDX blog posts go here.
│   ├── content.config.ts   # Configuration and schema validation for the Content Collections.
│   └── consts.ts           # Global constants (Site title, description, etc.).
├── astro.config.mjs        # Core configuration file for Astro and integrations.
├── package.json            # Project dependencies and script commands.
└── tailwind.config.*       # (If applicable) specific Tailwind configurations.
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs all project dependencies.               |
| `npm run dev`             | Starts local dev server at `localhost:4321`.     |
| `npm run build`           | Builds your production site to `./dist/`.        |
| `npm run preview`         | Previews your build locally, before deploying.   |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`.|

## ☁️ Cloudflare Pages & Image Optimization

When deploying to **Cloudflare Pages**, this project uses the `@astrojs/cloudflare` adapter. Please note the following critical configuration for image display:

### The Image Display Issue
By default, the Cloudflare adapter attempts to use dynamic image transformation bindings. In a static site context, this can cause images to break (resulting in `/_image/?href=...` 404 errors) because the dynamic service is not configured or available.

### The Fix
To ensure images are correctly optimized at build time and served as static assets, the `astro.config.mjs` is explicitly configured to use the local compilation service:

```javascript
  adapter: cloudflare({
      imageService: 'compile',
  }),
```

### Build Requirements
- **Node.js**: Cloudflare Pages must be configured to use **Node.js 22.12.0 or higher**. This is ensured by the `.node-version` and `.nvmrc` files in the repository. This version is required for the `sharp` image optimization library to function correctly in the Astro build process.
- **Build Cache**: If images appear broken after configuration changes, purge the **Build Cache** in your Cloudflare Pages project settings to ensure a fresh build without stale dependencies.

## 🚀 Deployment

This site is deployed to **Cloudflare Pages**. 

1. **Automatic Deployment**: Any push to the `main` branch triggers a build and deploy on Cloudflare.
2. **Build Settings**:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

**Maintenance Notes for Content Management:**
- To add a new blog post, create a new `.md` or `.mdx` file within the `src/content/blog/` directory.
- Ensure the frontmatter matches the schema defined in `src/content.config.ts` (e.g., requires `title`, `date`, etc.).
- If using the excerpt break, remember to use `<!--more-->` in `.md` files, but you **must** use `{/* more */}` in `.mdx` files. This acts as a standard MDX comment, keeping it hidden in the rendered blog post while still being parsed as the excerpt break by the site's logic.
