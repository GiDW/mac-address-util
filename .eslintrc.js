module.exports = {
  extends: ["@gidw/eslint-config-standard", "prettier"],
  ignorePatterns: ["node_modules/", "**/*.min.js", "*.d.ts"],
  env: {
    node: true
  }
};
