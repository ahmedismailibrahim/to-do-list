const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String,deafult:"one to do" },
  completed: { type: Boolean, default: false }
});
module.exports = mongoose.model('Todo', todoSchema);