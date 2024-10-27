import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: { 
      ...globals.browser,
      ...globals.jest
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    extends: [
      'plugin:react/jsx-runtime', // JSX Runtime 설정 추가
    ],
  },
  {
    ignores: [
      "node_modules/", // node_modules 폴더 무시
      "dist/",         // dist 폴더 무시
      ".parcel-cache/" // .parcel-cache 폴더 무시
    ]
  }
];