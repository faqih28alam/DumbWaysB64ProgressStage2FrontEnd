# 📝 Stage 2 - Front End - Day 1 
Repository to store our learning progress at Dumbways.id Bootcamp

## 🎯 Topic & Task - TO DO LIST
Day 1 - React Basic Setup & Components Fundamentals
- Conditional Rendering


## 🛠️ Step to setup Day 1 project
```text
- npm create vite@latest todo-app -- --template react-ts
- add src/components/card.tsx
- add src/components/button.tsx
- add src/components/counter.tsx
- edit components to have props
- add src/components/todoItem.tsx

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