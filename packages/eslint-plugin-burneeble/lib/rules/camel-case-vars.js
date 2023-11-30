/**
 * @fileoverview Variables must be written in camelCase
 * @author Burneeble
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  messages: {},
  meta: {
    messages: {
      error: "",
    },
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Variables must be written in camelCase",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {};
  },
};
