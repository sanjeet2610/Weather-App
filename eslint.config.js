import { defineConfig } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.js'],
    plugins: {
      js,
    },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },

    env: {
      browser: true,
      es2021: true,
      node: false, // Set to false if you are strictly browser-only
    },
  },
]);
