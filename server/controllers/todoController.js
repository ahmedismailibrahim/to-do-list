const Todo = require("../models/todomodel");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  }catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getTodo = async (req, res) => {
    try { const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json(todo); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,updatedAt: Date.now(),
    });
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    console.error(err);
      res.status(500).json({ error: err.message });
      
  }
};

exports.toggleCompletion = async (req, res) => {
    try { const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
        }
        todo.completed = !todo.completed;
        todo.updatedAt = Date.now();
        await todo.save();
        res.status(200).json(todo); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }   
};
