# 📝 MERN To-Do List App

👤 Author : Ahmed_Ismail_Ibrahim

GitHub: https://github.com/ahmedismalibrahim

LinkedIn: https://www.linkedin.com/in/ahmed-ismail-52931b360/


-------------------------

A simple ***Full-Stack To-Do List application*** built with the ***MERN stack*** (MongoDB, Express, React, Node.js).  
This project is created to practice CRUD operations and understand how frontend and backend work together.

-------------------------

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- 🗑 Delete tasks
- 📋 View all tasks
- 🔄 Persistent data using MongoDB

-------------------------


## 🛠 Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- Axios
- CSS / Bootstrap (if used)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

-------------------------

📌 Future Improvements

-User authentication

-Task categories

-Due dates

-Drag & drop tasks

------------------------------
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
------------------------------

## 🛠 Developer Workflow

1. Set up development environment :

        backend --> 
            npm init -y
            npm install express mongoose dotenv cors
            npm install --save-dev nodemon
            ni server.js .env
            mkdir models routes controllers

        frontend -->
            npx create-react-app 
            npm install axios react-router-dom
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


             git add . 
             git commit -m "message"
             git push -u origin main // if the first one else git push

              git status   
              git remote -v / view fetch and push repo
              git config --global user.name
              git config --global credential.helper store // save new credential
                 

2. Initialize backend project (Node.js & Express)
3. Connect backend to MongoDB
4. Create REST API endpoints
5. Test API using Postman / browser
6. Initialize React frontend
7. Build UI components
8. Connect frontend to backend APIs
9. Handle state and UI updates
10. Test application functionality
11. Commit code to Git
12. Push project to GitHub

------------------------------



