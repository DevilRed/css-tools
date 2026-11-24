/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
  ],
  plugins: ["stylelint-order"],
  rules: {
    // "declaration-block-trailing-semicolon": "always",
    // "no-extra-semicolons": true,
    "declaration-no-important": true,
    "property-no-vendor-prefix": true,

    // BEM-friendly kebab-case pattern
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*(__[a-z][a-z0-9]*(-[a-z0-9]+)*)?(--[a-z][a-z0-9]*)?$",
      {
        message:
          "Expected class name to follow BEM pattern (e.g., block__element--modifier)",
      },
    ],

    // Prevent deep nesting
    "max-nesting-depth": 3,
    "no-descending-specificity": true,
  },
  ignoreFiles: ["**/node_modules/**", "**/dist/**"],
};
