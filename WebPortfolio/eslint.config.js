import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'

export default [
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // Base JS rules
      ...js.configs.recommended.rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      /**
       * Disable core rule (it does not understand JSX namespace usage)
       * Replace with React-aware rule
       */
      'no-unused-vars': 'off',
      'react/jsx-uses-vars': 'error',

      // Fast refresh rule
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
