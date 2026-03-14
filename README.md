# River Wide Ocean Deep Website

This project is a static site built using [Astro v6](https://astro.build/). It serves as a migration from a previous WordPress site, leveraging modern web development tooling, static site generation, and optimized content delivery.

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

## 🚀 Deployment

This site is completely static. To deploy changes:
1. Ensure your content looks good locally (`npm run dev`).
2. Run the build command:
   ```bash
   npm run build
   ```
3. The built files will be output to the `dist/` directory.
4. Upload or statically host the contents of the `dist/` directory to your web server (e.g., Netlify, Vercel, GitHub Pages, or any standard Apache/Nginx static hosting).

**Maintenance Notes for Content Management:**
- To add a new blog post, create a new `.md` or `.mdx` file within the `src/content/blog/` directory.
- Ensure the frontmatter matches the schema defined in `src/content.config.ts` (e.g., requires `title`, `date`, etc.).
- If using the excerpt break, remember to use `<!--more-->` in `.md` files, but you **must** use `{/* more */}` in `.mdx` files. This acts as a standard MDX comment, keeping it hidden in the rendered blog post while still being parsed as the excerpt break by the site's logic.
