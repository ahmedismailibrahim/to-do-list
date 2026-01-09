
// create server index.js
const express = require('express');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());// solve problems of connecting front-end and back-end error "Access-Control-Allow-Origin"
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
