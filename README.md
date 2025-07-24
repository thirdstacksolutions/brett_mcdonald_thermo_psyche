### ✨ Code Formatting with Prettier

This project uses **Prettier** to automatically format all code consistently.

#### 🛠 Setup Instructions

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

#### ⚙️ Prettier Rules (from `.prettierrc`)

- 2 spaces for indentation
- No tabs
- Line wrap at 80 characters
- Single quotes in JS/TS
- Double quotes remain in HTML attributes
- Whitespace and wrapping are handled consistently

---

#### 🚫 Files Ignored by Prettier (`.prettierignore`)

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

### CMS Integration

A scaffold for Netlify CMS has been added to allow future content management integration. This includes:

- `/admin/index.html` – placeholder CMS entry point
- `/admin/config.yml` – placeholder configuration
- `/content/` – future location for editable content
- a backend-ready structure and placeholder configuration using Netlify CMS.

While no fields are currently editable, the setup allows seamless activation if content management needs arise.

Note: `/admin` is currently disabled via redirect (see `vercel.json`). CMS scaffolding exists but is not active.
