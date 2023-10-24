module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react', 'react-refresh', 'react-hooks'],
    rules: {
        'object-curly-spacing': ['error', 'always'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'no-unused-vars': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-no-undef': 'warn',
        'react/jsx-indent': ['off', 2],
        'react/jsx-curly-brace-presence': [
            'error',
            { props: 'never', children: 'never' },
        ],
        'max-len': ['error', { code: 180, ignoreComments: true }],
        'react/prop-types': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
};
