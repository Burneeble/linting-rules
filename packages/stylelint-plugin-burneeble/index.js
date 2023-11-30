"use strict";

const rules = require("./src/index");
const stylelint = require("stylelint");

module.exports = Object.keys(rules).map(function (ruleName) {
  return stylelint.createPlugin(
    "stylelint-plugin-burneeble/" + ruleName,
    rules[ruleName]
  );
});
