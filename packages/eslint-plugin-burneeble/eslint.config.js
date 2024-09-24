"use strict";

const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  baseDirectory: __dirname,
  allConfig: js.configs.all,
});

module.exports = compat({
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  plugins: ["react"],
  env: {
    node: true,
    es6: true,
  },

  languageOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
});
