import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'




export default defineConfig([
  globalIgnores([
    'dist',
    'node-modules',
    'coverage'
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      /* General */
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'prefer-const': 'error',
      'no-var': 'error',


      /* Code quality */
      'no-debugger': 'warn',
      'no-empty': 'error',
      'no-self-assign': 'error',
      'no-redeclare': 'error',
      'no-useless-escape': 'error',
      'no-extra-boolean-cast': 'error',
      'getter-return': 'error',
      'no-setter-return': 'error',
      'no-unsafe-optional-chaining': 'error',


      /* Typescript */
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

     '@typescript-eslint/no-explicit-any': 'warn',
     '@typescript-eslint/consistent-type-imports': 'error',


     /* React */
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    }
  },
])
