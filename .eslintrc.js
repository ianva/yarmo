// https://eslint.org/docs/user-guide/configuring

module.exports = {
  "plugins": ["prettier"],
  "extends": ["airbnb", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "semi": ["error", "always"],
    "max-depth": ["error", 4],
    "max-lines": [
      "error",
      { max: 300, skipBlankLines: true, skipComments: true }
    ]
  }
};
