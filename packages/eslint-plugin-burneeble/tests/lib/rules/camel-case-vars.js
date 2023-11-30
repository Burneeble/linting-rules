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

const ruleTester = new RuleTester();
ruleTester.run("camel-case-vars", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "const FooBar;",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
