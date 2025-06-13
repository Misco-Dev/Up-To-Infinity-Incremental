import globals from 'globals'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'

export default [
    // Ignore patterns
    {
        ignores: [
            'dist/**/*',
            '.astro/**/*',
            '.vercel/**/*',
            'node_modules/**/*'
        ]
    },
    ...tseslint.configs.recommended,
    {
        files: ['src/**/*.{js,mjs,cjs,ts,mts,cts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2025
            },
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
                ecmaVersion: 'latest',
                ecmaFeatures: {
                    jsx: true
                }
            },
        },
        rules: {
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-unused-vars': 'off', // Using TypeScript's checker instead
            '@typescript-eslint/no-unused-vars': ['warn'],
            '@typescript-eslint/explicit-function-return-type': ['warn'],
            '@typescript-eslint/no-explicit-any': ['error'],
            '@typescript-eslint/strict-boolean-expressions': ['warn'],
            'prefer-const': 'warn',
            'eqeqeq': ['error', 'always']
        }
    },
    {
        files: ['src/**/*.astro'],
        plugins: { astro },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: ['.astro'],
                sourceType: 'module',
                ecmaVersion: 'latest',
                project: './tsconfig.json'
            },
            globals: {
                ...globals.browser,
                ...globals.es2025
            }
        },
        processor: astro.processors['.astro'],
        rules: {
            'no-undef': 'off',
            'no-unused-vars': 'warn',
            'astro/no-conflict-set-directives': 'error',
            'astro/no-unused-define-vars-in-style': 'error',
            'astro/valid-compile': 'error',
            'astro/no-set-text-directive': 'error'
        }
    }
]
