module.exports = {
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
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "prettier", // должен быть последним
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
    },
    settings: {
        react: { version: "detect" },
        "import/resolver": {
            typescript: {
                project: "./tsconfig.json",
            },
        },
    },
    rules: {
        "unused-imports/no-unused-imports": "error",
        // "react/react-in-jsx-scope": "off", // не нужен в Next.js
    },
};
