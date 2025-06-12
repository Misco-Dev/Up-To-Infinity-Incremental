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
    // TypeScript and JavaScript files
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2025
            },
            parser: tseslint.parser,
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest',
                ecmaFeatures: {
                    jsx: true
                }
            },
        },
        rules: {
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-unused-vars': 'warn'
        }
    },
    {
        files: ['**/*.astro'],
        plugins: { astro },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: ['.astro'],
                sourceType: 'module',
                ecmaVersion: 'latest'
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
            'astro/no-unused-define-vars-in-style': 'error'
        }
    }
]
