# Migration Checklist & Implementation Plan: x-template-html002

We have compiled the checklist based on the operations completed for [x-template-html001](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html001/) to guide the migration of [x-template-html002](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/).

---

## 📋 Migration Checklist (Based on html001)

### 1. Asset Isolation & Self-Containment (Zero CDNs)
- [ ] **Tailwind CSS v4:** Replace CDN script `<script src="https://cdn.tailwindcss.com"></script>` with local styled CSS. Compile Tailwind CSS using local configuration/input file to output `assets/tailwind.min.css`.
- [ ] **Google Fonts:**
  - Locate google font URLs in head (e.g., `Anuphan`, `Cinzel`).
  - Download `.woff2` font files to `assets/fonts/`.
  - Create local CSS file `assets/fonts/fonts.css` mapping `@font-face` rules to local font paths.
  - Replace external preconnect/stylesheet links in `index.html` with local CSS reference.
- [ ] **Icons (Font Awesome / Lucide):**
  - Download stylesheet and font files locally or replace external icons.
  - Update layout paths.
- [ ] **Component Loader Paths:**
  - Change `../assets/load-components.js` to `assets/load-components.js` so everything stays inside the directory context.

### 2. Components & Standards
- [ ] **Navbar/Header:** Verify header fits theme and integrates the Micro Donate&Payment link if appropriate.
- [ ] **Footer:** Verify privacy policy, terms of service, and official website links exist.
- [ ] **Cookie Banner:** Ensure a GDPR/PDPA compliant Cookie Notice banner component exists (Fixed at viewport bottom with reject/accept buttons).

### 3. CI/CD & Project Configurations
- [ ] **`.gitignore`:** Create `.gitignore` ignoring `node_modules`, `screenshot.png`, etc.
- [ ] **`package.json`:** Set up pnpm script definitions for Tailwind CSS builds.
- [ ] **`README.md`:** Write documentation, structure overview, and add status badges (GitHub Pages, HTML5, Tailwind v4, JavaScript, etc.).
- [ ] **GitHub Action Workflow:** Setup `.github/workflows/deploy.yml` for automated deployment to GitHub Pages.

### 4. Verification & Testing
- [ ] Capture a automated screenshot to verify styling, typography, and assets load properly.

---

## 🛠️ Proposed Changes for [x-template-html002](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/)

### [Component Name: Assets & Configuration]

#### [NEW] [package.json](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/package.json)
Create a `package.json` to manage dependencies (like tailwindcss and postcss) and compile the assets.

#### [NEW] [.gitignore](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/.gitignore)
Create standard gitignore.

#### [NEW] [tailwind.input.css](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/tailwind.input.css)
Tailwind source directives mapping for compiling Tailwind v4 CSS.

#### [MODIFY] [index.html](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/index.html)
Update asset link paths to local copies. Update components references.

#### [MODIFY] [components/header.html](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/components/header.html)
Add/verify links.

#### [MODIFY] [components/footer.html](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/components/footer.html)
Add official links, privacy rules, and cookie consent controls or details if needed.

#### [NEW] [README.md](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/README.md)
Add project documentation with badges.

#### [NEW] [.github/workflows/deploy.yml](file:///C:/Users/User/Documents/GitHub/Axon/html5/x-template-html002/.github/workflows/deploy.yml)
GitHub Pages deployment workflow.

---

## 🔍 Verification Plan

- Run pnpm to compile tailwind assets.
- Validate local page loading.
- Take screenshot of the result to verify styling.
