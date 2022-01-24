module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: ["microservices/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
