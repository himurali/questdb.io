const path = require("path")

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/react",
    "prettier/standard",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 2018,
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "babel", "prettier", "react", "standard"],
  rules: {
    "react/sort-comp": [
      "error",
      {
        order: [
          "static-methods",
          "lifecycle",
          "/^on.+$/",
          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
          "everything-else",
          "/^render.+$/",
          "render",
        ],
      },
    ],
    "react/no-deprecated": "error",
    "react/style-prop-object": "error",
    "react/self-closing-comp": "error",
    "react/require-render-return": "error",
    "react/prefer-stateless-function": "error",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-access-state-in-setstate": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-first-prop-new-line": "error",
  //  "react/jsx-indent": ["error",  2],

     "react/jsx-indent": "off",
     "react/jsx-indent-props": ["error", 2],
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-default-props": "error",
    "react/jsx-wrap-multilines": "error",
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
      },
    ],

    "react/jsx-boolean-value": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-curly-brace-presence": "error",
    "react/prop-types": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "quote-props": ["error", "as-needed"],
    "object-shorthand": ["error", "always"],
    "no-var": ["error"],
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "prettier/prettier": ["warn"],
  },
  settings: {
    react: { version: "detect" },
  },
}
