"use strict";

const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  baseDirectory: __dirname,
  allConfig: js.configs.all,
});

module.exports = compat.config({
  root: true,
  extends: ["eslint:recommended", "plugin:eslint-plugin/recommended"],
  plugins: ["react"],
  env: {
    node: true,
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
});
