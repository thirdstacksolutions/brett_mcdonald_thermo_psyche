# Thermodynamic Psychology Website

This is the official static site for Dr. Brett McDonald’s _Thermodynamic Psychology_, built for accessibility, portability, and future CMS integration.

Primary hosting is on **Vercel**, with a GitHub Pages fallback for testing and backup visibility.

---

## ✨ Code Formatting with Prettier

This project uses **Prettier** to automatically format all code consistently.

### Setup Instructions

1. **Install the Prettier extension for VS Code**
   → [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. **Open the project in VS Code**
   VS Code will:

   - Auto-format on save using Prettier
   - Use our project-specific rules from `.prettierrc`
   - Apply workspace settings from `.vscode/settings.json`

3. **No Node or CLI setup required**
   Formatting works entirely via the VS Code extension.

---

### Prettier Rules (from `.prettierrc`)

- 2 spaces for indentation
- No tabs
- Line wrap at 80 characters
- Single quotes in JS/TS
- Double quotes remain in HTML attributes
- Whitespace and wrapping are handled consistently

---

### Files Ignored by Prettier (`.prettierignore`)

```txt
assets/images/
*.png
*.jpg
*.jpeg
*.gif
*.svg
*.webp
.DS_Store
*.min.js
*.log
```

---

## ⚠️ Local Development Notes

This project uses **clean relative links** (e.g. `href="engine/"`) instead of hardcoded file paths like `engine/index.html`. That means:

- ✅ Works in production (Vercel, GitHub Pages)
- ✅ Works locally **if using a web server**
- ❌ Will not work correctly if opened directly with `file://`

### To test locally

Use one of the following:

- **Live Server** in VS Code
  (make sure it's serving from the **project root** — we’ve included a `.vscode/settings.json` file to handle this)
- Or a quick Python server:

```bash
python3 -m http.server
```

---

## 🌐 GitHub Pages Compatibility

This site is deployed to both Vercel (primary) and GitHub Pages (backup/demo).
Because GitHub Pages serves the site from a subdirectory (`/brett_mcdonald_thermo_psyche/`), all pages include a conditional `<base>` tag in the `<head>`:

```html
<script>
  if (window.location.hostname.includes('github.io')) {
    document.write('<base href="/brett_mcdonald_thermo_psyche/">');
  }
</script>
```

This ensures relative links work properly on GitHub Pages **without breaking anything on Vercel or in local development**.

> **Make sure this `<script>` is included in the `<head>` of every HTML file in the project.**

---

## 🔧 CMS Integration

A scaffold for Netlify CMS has been added to allow future content management integration. This includes:

- `/admin/` – placeholder CMS entry point
- `/admin/config.yml` – placeholder configuration
- `/content/` – future location for editable content
- a backend-ready structure designed for easy activation using Netlify CMS

While no fields are currently editable, the setup allows seamless activation if content management needs arise.

Note: `/admin` is currently disabled via redirect (see `vercel.json`). CMS scaffolding exists but is not active.
