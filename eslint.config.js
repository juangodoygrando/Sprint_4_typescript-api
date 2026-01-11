import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(

  js.configs.recommended,

  
  ...tseslint.configs.recommended,

  {
    ignores: ["dist", "node_modules", "env.d.ts", "vite.config.ts"],
  },

  {
    files: ["src/tests/**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser, 
      },
    },
  }
);
