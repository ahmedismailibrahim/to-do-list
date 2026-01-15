# 📝 MERN To-Do List App

👤 Author : Ahmed_Ismail_Ibrahim

GitHub: https://github.com/ahmedismalibrahim

LinkedIn: https://www.linkedin.com/in/ahmed-ismail-52931b360/

---

A simple **_Full-Stack To-Do List application_** built with the **_MERN stack_** (MongoDB, Express, React, Node.js).  
This project is created to practice CRUD operations and understand how frontend and backend work together.

---

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- 🗑 Delete tasks
- 📋 View all tasks
- 🔄 Persistent data using MongoDB
- counter all tasks / completed / pending

---

## 🛠 Tech Stack

### Frontend

- React / react +vite
- JavaScript (ES6+)
- Axios
- CSS / tailwind / Bootstrap

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

📌 Future Improvements

-User authentication

-Task categories

-Due dates 'done'

-Drag & drop tasks

---

## 🔄 Application Workflow

1. User opens the application
2. React frontend loads the UI
3. Frontend sends request to backend API
4. Express server receives the request
5. Server processes logic and interacts with MongoDB
6. MongoDB stores or retrieves task data
7. Backend sends response to frontend
8. React updates the UI with new data
9. User sees updated task list in real time

---

## 🛠 Developer Workflow

### Set up development environment :

        backend -->
            npm init -y
            npm install express mongoose dotenv cors
            npm install --save-dev nodemon
            ni server.js .env
            mkdir models routes controllers

        frontend -->
            npx create-react-app name
            npm install axios react-router-dom
            npm install bootstrap
                "axios → HTTP requests to backend
                react-router-dom → Routing & pages"

            npm install --save-dev concurrently // run both back and front
            npm run dev

         pushing on git first once :

             git init
             delete windows credentials for git:https:github.com
             create now tokens
             git remote add origin https:repo
             new sign with tokens
             git branch -M main  // insted of master branch
             git pull origin main--allow-unrelated-histories press Esc the type :qa or :wq // if github already has files
             git remote -v / view fetch and push repo
             git config --global user.name
             git config --global credential.helper store // save new credential


             git add .
             git commit -m "message"
             git status
             git push -u origin main // if the first one else git push


             git rm -r --cached client/node_modules server/node_modules // delete packages

### backend :

    -can using env-cmd insted of dotenv , and we'r using this bacause node can't  read .env or any files by itself.

        npm i -g env-cmd
        "dev": "env-cmd -f .env nodemon app.js"
        npx run dev

    -Connect backend to MongoDB using mongodb compass and atlas.

    -Create REST API endpoints and Test API using Postman

### frontend :

    - Build UI components

        src/
        ├── App.js # Main app component with state
        └── components/
        ├── Header.js # App title and subtitle
        ├── StatsCards.js # Stats container
        ├── StatCard.js # Individual stat card
        ├── FilterBar.js # Filter buttons + Add button
        ├── FilterButton.js # Individual filter button
        ├── TaskList.js # Tasks container
        ├── TaskItem.js # Individual task card
        └── TaskModal.js # Unified modal for Add/Edit

        - taillwind setup it's prefer to use vite

            npm create vite@latest my-app
            cd my-app

            npm install -D tailwindcss@3 postcss autoprefixer
            npx tailwindcss init -p

            - tailwind.config.js :

                    export default {
                    content: [
                    "./index.html",
                    "./src/**/\*.{js,ts,jsx,tsx}",
                    ],
                    theme: {
                    extend: {},
                    },
                    plugins: [],
                    }

            - index.css :

                    @tailwind base;
                    @tailwind components;
                    @tailwind utilities;

---

8.  Connect frontend to backend APIs 'done '
9.  Handle state and UI updates 'done'

10. Test application functionality

---

11. Commit code to Git
12. Push project to GitHub

---
