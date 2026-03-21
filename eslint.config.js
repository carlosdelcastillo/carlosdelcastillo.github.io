import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      '.prettierrc.cjs',
      'astro.config.mjs',
      'playwright.config.ts',
      'tailwind.config.mjs',
      'vitest.config.ts',
    ],
  },
  ...compat.config({
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:astro/recommended',
    ],
    plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/triple-slash-reference': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/heading-has-content': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
        },
      },
    ],
  }),
  {
    files: ['**/*.astro'],
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
];
