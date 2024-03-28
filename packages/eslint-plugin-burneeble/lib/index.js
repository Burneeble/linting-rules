/**
 * @fileoverview Burneeble javascript rules
 * @author Burneeble
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
module.exports.disabled = {
  "@next/next/no-img-element": "off",
  "jsx-a11y/alt-text": "off",
  "n/no-missing-import": "off",
  "no-console": "off",
  "padding-line-between-statements": "off",
  "sort-imports": "off",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": [
    "error",
    { argsIgnorePattern: "(^_|props)" },
  ],
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/ban-ts-comment": "off",
  "react/jsx-key": "error",
  "react-hooks/exhaustive-deps": "off",
};
