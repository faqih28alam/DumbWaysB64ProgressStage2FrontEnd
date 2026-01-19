# 📝 Stage 2 - Front End - Day 2 
Repository to store our learning progress at Dumbways.id Bootcamp

## 🎯 Topic & Task - Multi Page Blog
Day 2 - Routing, Tailwind CSS, & ShadCN UI Components
- Nested Route / Dynamic Route
- 

## 🛠️ Step to setup Day 2 project
```text
- npm create vite@latest MultiPageBlog-app -- --template react-ts
- cd MultiPageBlog-app
- 
```

## 📂 Project Structure
```text
todo-app/
├── public/              # Static assets (logos, icons)
├── src/                 # Main application source code
│   ├── assets/          # Images and global styles
│   ├── components/      # Reusable functional components (Button, Card, etc.)
│   │   ├── Button.tsx   # Custom button component
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
    "jsx": "react-jsx"
  }
}     
```

#### Notes
- Components are reusable blocks of code that can be used multiple times in a React application.
- Props are input parameters that are passed to a component when it is rendered in a React application.