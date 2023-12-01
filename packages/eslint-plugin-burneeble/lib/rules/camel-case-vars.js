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
      error: "Variables must be written in camelCase.",
    },
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Variables must be written in camelCase.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "code", // Or `code` or `whitespace`
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

    return {
      VariableDeclarator(node) {
        if (node.id.name && node.id.type === "Identifier") {
          const varName = node.id.name;
          if (!/^[a-z][a-zA-Z0-9]*$/.test(varName)) {
            const fixed = toCamelCase(varName);
            context.report({
              node,
              messageId: "error",
              fix: (fixer) => {
                return fixer.replaceTextRange(node.id.range, fixed);
              },
            });
          }
        }
      },
    };
  },
};

function toCamelCase(inputString) {
  return inputString.replace(/^([A-Z])|[\s-_](\w)/g, (match, p1, p2) => {
    if (p2) {
      return p2.toUpperCase();
    }
    return p1.toLowerCase();
  });
}
