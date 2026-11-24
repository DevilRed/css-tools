# CSS Architecture Boilerplate

Project boilerplate demonstrating modern CSS architecture, automated code quality enforcement (stylelint), and visual regression testing (playwright).

## Features

- **Modular Architecture**: ITCSS/SMACSS-inspired directory structure separating concerns (base, layout, components, themes).
- **Automated Linting**: Stylelint with SCSS support and logical property ordering (`recess-order`), running automatically on save and pre-commit.
- **Visual Regression Testing**: Playwright setup to catch unintended UI/layout shifts before they reach production.


## Project Structure

```text
src/
├── main.js                 # Entry point
├── styles/
│   ├── main.scss           # Main import file (orchestrates the cascade)
│   ├── base/               # Resets, variables, typography, mixins
│   ├── components/         # Reusable UI blocks (buttons, cards, modals)
│   ├── layout/             # Page-level structure (header, footer, grid)
│   ├── pages/              # Page-specific overrides (use sparingly)
│   └── themes/             # Color schemes and thematic variations
└── index.html
