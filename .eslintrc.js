module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'arrow-parens': 'off',
    'require-jsdoc': 'off',
    'no-trailing-spaces': 'off',
    'operator-linebreak': 'off',
    'object-curly-spacing': 'off',
    'quote-props': 'off',
    'indent': ['error', 2],
  },
  
};
