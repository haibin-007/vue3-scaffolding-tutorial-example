module.exports = {
  env: {
    browser: true,  // 支持浏览器环境
    node: true,     // 识别 CommonJS
    es2021: true,   // 识别 ES 的代码
  },
  // 继承ESLint的规则集
  extends: [
    "eslint:recommended",           // ESLint自带
    "plugin:prettier/recommended"   // Prettier
  ],
  overrides: [
    {
      files: ["**/*.{js,jsx}"],          // 只处理 js 和 jsx 文件
      parser: "@babel/eslint-parser",    // 使用 babel 来解析 js 文件
      parserOptions: {
        sourceType: "module",            // 支持 import/export
        allowImportExportEverywhere: false,
        ecmaFeatures: {
          globalReturn: false,
        },
        babelOptions: {
          configFile: './babel.config.js', // 指定babel配置文件
        },
      },
    },
    {
      files: ["**/*.{ts,tsx}"],              // 只处理 ts 和 tsx 文件
      parser: "@typescript-eslint/parser",   // 解析 TypeScript
      parserOptions: {
        project: ["./tsconfig.json"],        // 指定ts配置文件
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",                          // 官方语法检查
        "plugin:@typescript-eslint/recommended-requiring-type-checking",  // 类型检查
      ]
    },
    {
      files: ["**/*.vue"],                    // 只处理 vue 文件
      parser: "vue-eslint-parser",            // 解析Vue
      extends: ["plugin:vue/vue3-essential"], // 使用vue3的推荐规则
    }
  ]
};
