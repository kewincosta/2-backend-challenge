import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: await import('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    files: ['src/**/*.{ts,tsx}'],
    ignores: [
      'node_modules/**/*',
      'dist/**/*',
      'build/**/*',
      '**/*.test.ts',
      '**/*.test.tsx'
    ],
    rules: {
      ...tseslint.configs.recommended.rules,
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'max-len': ['error', { code: 150 }],
      'no-trailing-spaces': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      "semi": ["error", "never"],
      eqeqeq: ['error', 'always'],
      'consistent-return': 'error',
      'default-case': 'error',
      'no-eval': 'error',
      'no-with': 'error',
      "space-before-function-paren": ["error", "never"]
    },
  },
];
