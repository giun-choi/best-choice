const stylistic = require('@stylistic/eslint-plugin')
const parserTs = require('@typescript-eslint/parser')

module.exports = [
  {
    plugins: {
      '@stylistic': stylistic
    },
    files: ['**/*.js', 'src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['build/**'],
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/block-spacing': 'error',
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      '@stylistic/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never'
        }
      ]
    },
    languageOptions: {
      parser: parserTs
    }
  },
  // Project Setting
  {
    plugins: {
      '@stylistic': stylistic
    },
    files: ['**/*.json'],
    ignores: ['build/**', 'src/**'],
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'double']
    },
    languageOptions: {
      parser: parserTs
    }
  }
]
