/**
 * @fileoverview Variables must be written in camelCase
 * @author Burneeble
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/camel-case-vars"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});
ruleTester.run("camel-case-vars", rule, {
  valid: [
    {
      code: "const myVariable = 42;",
    },
    {
      code: "let anotherVariableName = true;",
    },
    {
      code: 'const someValue = "hello";',
    },
  ],

  invalid: [
    {
      code: "const snake_case = 123;",
      output: "const snakeCase = 123;",
      errors: [{ message: "Variables must be written in camelCase." }],
    },
    {
      code: 'let PascalCase = "test";',
      output: 'let pascalCase = "test";',
      errors: [{ message: "Variables must be written in camelCase." }],
    },
  ],
});
