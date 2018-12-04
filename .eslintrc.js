// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  // parserOptions: {
  //   sourceType: 'module'
  // },
  env: {
    es6: true,
    browser: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  // add your custom rules here
  rules: {
    "no-undef": [ 1 ],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 4, { 'SwitchCase': 1, 'flatTernaryExpressions': true}],
    'space-before-function-paren': ['error', 'never'],
    "space-in-parens": [ 0, "always" ],
    "template-curly-spacing": [ 2, "always" ],
    "array-bracket-spacing": [ 2, "always" ],
    "object-curly-spacing": [ 2, "always" ],
    "computed-property-spacing": [ 2, "always" ],
    "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
    "quotes": [ 1, "single", "avoid-escape" ],
    "no-use-before-define": [ 2, { "functions": false } ],
    "semi": [2, "never"],
    "prefer-const": 1,
    "react/prefer-es6-class": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-curly-spacing": [ 2, "always" ],
    "react/jsx-indent": [ 2, 4 ],
    // "react/prop-types": [ 1 ],
    "react/no-array-index-key": [ 1 ],
    "no-undef": [ 1 ],
    "no-case-declarations": [ 1 ],
    "no-return-assign": [ 1 ],
    "no-param-reassign": [ 1 ],
    "no-shadow": [ 1 ],
    // "camelcase": [ 1 ],
    "no-underscore-dangle" : [0, "always"],
  }
}
