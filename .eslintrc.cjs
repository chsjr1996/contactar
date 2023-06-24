/* eslint-disable  */
var path = require('path');

module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: false,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
        'react-hooks/exhaustive-deps': 'warn',
        'linebreak-style': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },

    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@Root', path.resolve(__dirname, 'resources', 'js')],
                    [
                        '@Config',
                        path.resolve(__dirname, 'resources', 'js', 'Configs'),
                    ],
                    [
                        '@Interface',
                        path.resolve(
                            __dirname,
                            'resources',
                            'js',
                            'Interfaces'
                        ),
                    ],
                    [
                        '@Layout',
                        path.resolve(__dirname, 'resources', 'js', 'Layouts'),
                    ],
                    [
                        '@Page',
                        path.resolve(__dirname, 'resources', 'js', 'Pages'),
                    ],
                    [
                        '@Component',
                        path.resolve(
                            __dirname,
                            'resources',
                            'js',
                            'Components'
                        ),
                    ],
                    [
                        '@Style',
                        path.resolve(__dirname, 'resources', 'js', 'Styles'),
                    ],
                    [
                        '@Service',
                        path.resolve(__dirname, 'resources', 'js', 'Services'),
                    ],
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
