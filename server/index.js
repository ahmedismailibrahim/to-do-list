// this is 'to do list' app practice on operaions CRUD
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose =require('mongoose');

// create server 
const app = express();

app.use(cors()); // solve problems of connecting front-end and back-end error "Access-Control-Allow-Origin"
app.use(express.json());  // to parse json data from request body instead of user body-parser

dotenv.config();// to read file .env becaue node can't reat itself


const PORT = process.env.PORT || 5000,
 User=process.env.USER,
    Password = process.env.PASSWORD,
    DatabaseName = process.env.DATABASE_NAME;;

// connect to dp
mongoose.connect(
  `mongodb+srv://${User}:${Password}@mern.n6wzmmq.mongodb.net/?appName=MERN`
).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB',err);
}); 

// routes (endpoints)
  app.use('/todos', require('./routes/todos'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
