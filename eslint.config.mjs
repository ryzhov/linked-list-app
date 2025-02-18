import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js';


export default [
  {files: ["./*.js"], languageOptions: {sourceType: "commonjs"}},
  {files: ["./src/*.js"], languageOptions: {sourceType: "module"}},
  {languageOptions: { globals: globals.browser }},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {plugins: { '@stylistic/js': stylisticJs }},
  {rules:
      {
        '@stylistic/js/indent': ['error', 2],
        '@stylistic/js/semi': ['error', 'always'],
      }
  },
];
