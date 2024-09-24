# eslint-plugin-burneeble

Burneeble javascript rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-burneeble`:

```sh
npm install eslint-plugin-burneeble --save-dev
```

## Usage

Add `burneeble` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "burneeble"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "burneeble/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                             | Description                             | 🔧 |
| :----------------------------------------------- | :-------------------------------------- | :- |
| [camel-case-vars](docs/rules/camel-case-vars.md) | Variables must be written in camelCase. | 🔧 |

<!-- end auto-generated rules list -->


