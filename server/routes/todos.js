const router = require('express').Router(); 
const Todo = require('../models/todo');
// Create a new todo
router.post('/', async (req, res) => {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
});
// Get all todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json(todos);
});
// Update a todo
router.put('/:id', async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(todo);
});
// Delete a todo
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).end();
});
module.exports = router;
   