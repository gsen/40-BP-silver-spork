# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Tailwind CSS installation with Vite

Official docs: https://tailwindcss.com/docs/installation/using-vite

1. Install Tailwind CSS and the Vite plugin:

   ```sh
   pnpm add tailwindcss @tailwindcss/vite
   ```

2. Add the Tailwind CSS plugin to `vite.config.js`:

   ```js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   });
   ```

3. Import Tailwind CSS in your main CSS file, such as `src/index.css`:

   ```css
   @import "tailwindcss";
   ```

4. Start the development server:

   ```sh
   pnpm dev
   ```

5. Use Tailwind utility classes in your components:

   ```jsx
   export default function App() {
     return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
   }
   ```

## shadcn/ui installation with JavaScript

Official docs:

- https://ui.shadcn.com/docs/installation/vite
- https://ui.shadcn.com/docs/javascript

This project is configured for JavaScript shadcn/ui components. The important setting is `"tsx": false` in `components.json`, which tells the shadcn CLI to generate `.jsx` components instead of `.tsx` components.

1. Configure JavaScript path aliases in `jsconfig.json`:

   ```json
   {
     "compilerOptions": {
       "jsx": "react-jsx",
       "paths": {
         "@/*": ["./*"],
         "@components/*": ["./components/*"],
         "@hooks/*": ["./hooks/*"],
         "@lib/*": ["./lib/*"],
         "@ui/*": ["./components/ui/*"],
         "@utils": ["./lib/utils"]
       }
     },
     "include": ["src", "components", "lib", "hooks", "vite.config.js"]
   }
   ```

2. Reference the JavaScript config from `tsconfig.json`:

   ```json
   {
     "extends": "./jsconfig.json"
   }
   ```

3. Enable TypeScript path resolution in `vite.config.js`:

   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     resolve: {
       tsconfigPaths: true,
     },
   })
   ```

4. Initialize shadcn/ui:

   ```sh
   pnpm dlx shadcn@latest init --preset b7W7uXIq8 --base base --template vite
   ```

5. Use JavaScript settings in `components.json`:

   ```json
   {
     "$schema": "https://ui.shadcn.com/schema.json",
     "style": "base-luma",
     "rsc": false,
     "tsx": false,
     "tailwind": {
       "config": "",
       "css": "src/index.css",
       "baseColor": "taupe",
       "cssVariables": true,
       "prefix": ""
     },
     "iconLibrary": "lucide",
     "rtl": false,
     "aliases": {
       "components": "@/components",
       "utils": "@/lib/utils",
       "ui": "@/components/ui",
       "lib": "@/lib",
       "hooks": "@/hooks"
     },
     "menuColor": "default",
     "menuAccent": "subtle",
     "registries": {}
   }
   ```

6. Add generated components as needed:

   ```sh
   pnpm dlx shadcn@latest add button
   ```

7. Import generated components from the configured aliases:

   ```jsx
   import { Button } from "@/components/ui/button";

   export default function App() {
     return <Button>Click me</Button>;
   }
   ```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
