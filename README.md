# 📝 Stage 2 - Front End - Day 2 
Repository to store our learning progress at Dumbways.id Bootcamp

## 🎯 Topic & Task - Product Catalog
Day 2 - Advanced Styling, Authentication, Private Route & Data Fetching
-  
- 

## 🛠️ Step to setup Day 2 project
```text
- npm create vite@latest productcatalog-app -- --template react-ts
- cd productcatalog-app
- npm install tailwindcss @tailwindcss/vite
- update index.css
- update tsconfig.json
- update tsconfig.app.json
- npm install -D @types/node
- update vite.config.ts
- npx shadcn@latest init
- npm i react-router-dom
- add src/pages/about.tsx home.tsx postDetail.tsx posts.tsx
- add <BrowserRouter> to App.tsx for routing
- add components --> npx shadcn@latest add button
```

## 📂 Project Structure
```text
MultiPageBlog-app/
├── public/              # Static assets (logos, icons)
├── src/                 # Main application source code
│   ├── assets/          # Images and global styles
│   ├── components/ui/   # Reusable functional components (Button, Card, etc.)
│   │   ├── button.tsx   # Custom button component
│   │   └── Card.tsx     # Custom card component
│   ├── App.tsx          # Main root component and State management
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global CSS styles
│   └── vite-env.d.ts    # TypeScript environment definitions
├── .gitignore           # Files and folders to be ignored by Git
├── index.html           # Single Page Application entry HTML
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build tool configuration
```

## 🚀 Implementation Flow
```text
1. Setup project react using Vite
2. Stuctturing Common Folders (components, utils, pages)
3. Create props on components
4. Setup React Router & Tailwind CSS
5.
```

### 💡 Helpful Tips
- add this code to tsconfig.json
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}     
```
- add this code to index.css
```js
@import "tailwindcss";
```
- add this to tsconfig.app.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
- add this to vite.config.ts
```js
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

#### Notes
- Components are reusable blocks of code that can be used multiple times in a React application.
- Props are input parameters that are passed to a component when it is rendered in a React application.
- ShadCN UI is a collection of ready-to-use React components that are designed to be used with Tailwind CSS.