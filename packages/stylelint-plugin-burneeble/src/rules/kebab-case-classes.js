"use strict";

const stylelint = require("stylelint");
const { report, ruleMessages, validateOptions } = stylelint.utils;
const ruleName = "kebab-case-classes";
const messages = ruleMessages(ruleName, {
  expected: (unfixed, fixed) => `Expected "${unfixed}" to be "${fixed}"`,
});

const rule = function getPlugin(primaryOption, secondaryOptionObject, context) {
  return function lint(postcssRoot, postcssResult) {
    const validOptions = validateOptions(postcssResult, ruleName, {
      //No options for now...
    });

    if (!validOptions) {
      //If the options are invalid, don't lint
      return;
    }
    const isAutoFixing = false;
    // Boolean(context.fix);

    postcssRoot.walkDecls((decl) => {
      const className = decl.parent.selector;
      if (/^.[a-z]+(-[a-z]+)*$/.test(className)) {
        return;
      }

      const fixed = toKebabCase(className);
      if (isAutoFixing) {
      } else {
        report({
          ruleName,
          result: postcssResult,
          message: messages.expected(className, fixed),
          node: decl,
        });
      }
    });
  };
};

module.exports = rule;
module.exports.ruleName = ruleName;
module.exports.messages = messages;

function toKebabCase(inputString) {
  return inputString
    .trim()
    .replace(/(\s|_)+/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
}
