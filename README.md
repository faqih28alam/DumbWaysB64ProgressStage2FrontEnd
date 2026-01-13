# 📝 Stage 2 Day 6 - TO DO LIST
Repository to store our learning progress at Dumbways.id Bootcamp

## 🎯 Topic & Task
Day 1 - File Upload, Session, and Security
- Components
- Props

## 🛠️ How to Setup Typescript 
```text
- make a folder to contain the project
- npm init -y                                               # to initiliaze Node.js Environment
- npm install express                                       # to install Express Framework
- npm install -D typescript ts-node-dev @types/express      # to install typscript
- npx tsc --init                                            # execute typescript package
- make dir src at root
- create app.ts file inside src
- edit tsconfig.json, define root folder ex: ("rootDir": "./src")
- edit package.json, define inside scripts "dev": "ts-node-dev --respawn src/app.ts"
- npm run dev                                               # to run app.ts
```

## 🛠️ How to Setup Prisma 6 with PostgreSQL
```text
- npm install prisma@6 --save-dev                           # install Prisma CLI v6
- npm install @prisma/client@6                              # install Prisma Client v6
- create database in pgAdmin (e.g., "mini_store_db")
- npx prisma init                                           # initialize Prisma folder
- edit .env file:
  DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME?schema=public"

- edit prisma/schema.prisma (Ensure URL is inside the datasource block):
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }

  model Product {
    id        Int      @id @default(autoincrement())
    name      String
    price     Float
    createdAt DateTime @default(now())
  }

- npx prisma generate                                       # generate the client code
- npx prisma migrate dev --name init                        # push schema to PostgreSQL
- npx prisma studio                                         # to see Data in localhost:555, execute at other bash
```

## 🛠️ How to Setup JWT
```text
- npm isntall joi jsonwebtoken bcrypt
- npm install -D @types/bcrypt @types/joi @types/jsonwebtoken
- add src/utils/jwt.ts for signature token and verification token 
- add jwt secret key in .env
- continue project to controllers / middlewares
```

## 🛠️ Step to setup Day 6 project
```text
- npm install -D @types/multer
- npm install -D @types/path
- npm install -D @types/cors
- add src/uploads
- add src/utils/multer.ts
- add src/middlewares/cors.ts
- baru sampai menit 09:27

```

## 📂 Project Structure
```text
├── prisma/
│   ├── schema.prisma           # Prisma Schema (v6 style)
│   └── migrations/             # Database migration history
├── src/
│   ├── app.ts                  # Entry point
│   ├── connection/
│   │   ├── seed.ts             # to perform seeding
│   │   └── client.ts           # Prisma Client instantiation
│   ├── routes/
│   │   ├── transferPoint-route.ts
│   │   ├── product-route.ts    
│   │   └── order-route.ts      
│   ├── controllers/
│   │   ├── transferPoint-controller.ts
│   │   ├── product-controller.ts
│   │   └── order-controller.ts
│   ├── utils/
│   │   ├── multer.ts           # to handle file upload
│   │   ├── app-error.ts        # to handle error
│   │   └── jwt.ts              # to handle JWT
│   └── middlewares/            # to bridge proccess
│       ├── auth-middleware.ts                        # to handle authentication and authorization JWT
│       └── validateStockUpdate-middleware.ts         # to handle validation for stock update
├── .env                        # Environment variables (DB URL)
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 🚀 Implementation Flow
```text
1. 
```

### 💡 Helpful Tips
- 

#### Notes
- 