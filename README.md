# Fooxly ESLint Config for React Native

The default [ESLint](https://eslint.org/) config for [Fooxly](https://www.fooxly.com) projects using React Native.

[![npm version](https://img.shields.io/npm/v/@fooxly/eslint-config-react-native.svg?style=flat)](https://www.npmjs.com/package/@fooxly/eslint-config-react-native)
[![downloads](https://img.shields.io/npm/dt/@fooxly/eslint-config-react-native.svg)](https://www.npmjs.com/package/@fooxly/eslint-config-react-native)
[![ci status](https://github.com/Fooxly/eslint-config-react-native/workflows/tests/badge.svg)](https://github.com/Fooxly/eslint-config-react-native/actions?query=workflow%3Atests)

## :rocket:&nbsp; Powered By

- [@fooxly/eslint-config-react](https://www.npmjs.com/package/@fooxly/eslint-config-react)
- [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native)

## :heart:&nbsp; Support us

> About **40%** of your donation goes to one of the charities we support. For further information or questions please visit [our website](https://www.fooxly.com/charity) or contact us via [charity@fooxly.com](mailto:charity@fooxly.com).

<p>
  <a title="BuyMeACoffee" href="https://www.buymeacoffee.com/fooxly">
    <img src="https://developer.fooxly.com/general/assets/images/buymeacoffee.png" alt="BuyMeACoffee" width="25%" style="max-width: 180px" />
  </a>&nbsp;&nbsp;
  <a title="Patreon" href="https://www.patreon.com/fooxly">
    <img src="https://developer.fooxly.com/general/assets/images/patreon.png" alt="Patreon" width="25%" style="max-width: 180px"/>
  </a>&nbsp;&nbsp;
  <a title="PayPal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3GEYSYZFXV9GE">
    <img src="https://developer.fooxly.com/general/assets/images/paypal.png" alt="PayPal" width="25%" style="max-width: 180px" />
  </a>
</p>

<br/>

## :cloud:&nbsp; Installation

### using npm

```sh
npm install --save-dev @fooxly/eslint-config-react-native
```

### using yarn

```sh
yarn add -D @fooxly/eslint-config-react-native
```

## :triangular_ruler:&nbsp; Usage

We recommend using [Babel's ESLint parser](https://github.com/babel/babel-eslint).

### using .eslintrc

```json
{
  "parser": "babel-eslint",
  "extends": ["@fooxly/eslint-config-react-native"]
}
```

### using package.json

```json
...
"eslintConfig": {
  "parser": "babel-eslint",
  "extends": ["@fooxly/eslint-config-react-native"]
}
...
```

## :straight_ruler:&nbsp; Our Configuration

This configuration extends our [React config](https://www.npmjs.com/package/@fooxly/eslint-config-react) with a few additional rules for React Native.

### [No Inline Styles]

Logging level: **Error**

Unless variables (like [Animations](https://facebook.github.io/react-native/docs/0.60/animations)) are used for inline styling, these slow down your app (mostly during re-renders) and are therefore not allowed.

### [No Unused Styles]

Logging level: **Error**

This one is obvious, reduces the bundle size due to the styles not being used anyways.

### [No Color Literals]

Logging level: **Warning**

We (like others) prefer storing all our color variables inside a theme file (like [styled-components theming](https://www.styled-components.com/docs/advanced#theming)) or folder.

### [Splitting Platform Components]

Logging level: **Warning**

Splitting platform-specific parts of your app in multiple files produces the correct bundle per platform.

### [No Single Element Style Arrays]

Logging level: **Error**

These cause an unnecessary performance loss due to the array's identity changing on every re-render, and are therefore not allowed.

[No Inline Styles]: https://github.com/Intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-inline-styles.md
[No Unused Styles]: https://github.com/Intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-unused-styles.md
[No Color Literals]: https://github.com/Intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-color-literals.md
[Splitting Platform Components]: https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/split-platform-components.md
[No Single Element Style Arrays]: https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-single-element-style-arrays.md

## :label:&nbsp; Badge

Are you using this in one of your projects? Include this badge in your README to let others know that your code is using the Fooxly code style.

[![js-fooxly-style](https://img.shields.io/badge/code%20style-fooxly-brightgreen)](https://www.npmjs.com/package/@fooxly/eslint-config-react-native)

```md
[![js-fooxly-style](https://img.shields.io/badge/code%20style-fooxly-brightgreen)](https://www.npmjs.com/package/@fooxly/eslint-config-react-native)
```
