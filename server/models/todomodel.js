const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true , trim: true},// we using trim to remove spaces before and after text
  description: { type: String, default: "description of to do", trim: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Todo', todoSchema);