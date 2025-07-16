module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    ignorePatterns: [
        'node_modules/',
        '.next/',
        'dist/',
        'coverage/',
        '*.config.js',
        '**/*.config.js', // Рекурсивно для всех config-файлов
        'jest.setup.js',
    ],
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "jsx-a11y",
        "import",
        "unused-imports",
    ],
    extends: [
        "next/core-web-vitals",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/typescript",
        "prettier"
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json"

    },
    settings: {
        react: { version: "detect" },
        "import/resolver": {
            typescript: {
                project: "./tsconfig.json",
                alwaysTryTypes: true
            },
            node: true
        }
    },
    rules: {
        "unused-imports/no-unused-imports": "error",
        "react/react-in-jsx-scope": "off",
        "import/no-unresolved": "off",
        "import/namespace": "off",
        "import/default": "off",
        "import/no-duplicates": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/no-unused-vars": "error"
    },
};
