const testRule = require("stylelint-test-rule-tape");
const rule = require("./../rules/kebab-case-classes");

testRule(rule, {
  plugins: [""],
  ruleName: rule.ruleName,
  config: { preset: "suit" },
  accept: [
    {
      code: ".my-class { color: red; }",
    },
    {
      code: ".another-class { background-color: #FFF; }",
    },
  ],
  reject: [
    {
      code: ".myClass { border: 1px solid blue; }",
      message: rule.messages.expected(".myClass", ".my-class"),
    },
    {
      code: ".MyClass { box-shadow: 0 0 5px 1px blue; }",
      message: rule.messages.expected(".MyClass", ".my-class"),
    },
    {
      code: ".my_class { box-shadow: 0 0 5px 1px blue; }",
      message: rule.messages.expected(".my_class", ".my-class"),
    },
  ],
});
