const router = require("express").Router();
const todoController = require("../controllers/todoController");
//const Todo = require("../models/todomodel");

router.route("/"); // to define multiple methods for a single route path
router.route("/").get(todoController.getAllTodos);
router.route("/:id").get(todoController.getTodo);
router.route("/").post(todoController.createTodo);
router.route("/:id").put(todoController.updateTodo);
router.route("/:id").delete(todoController.deleteTodo);
router.route("/:id").patch(todoController.toggleCompletion);

// // Create a new todo
// router.post("/", async (req, res) => {
//   try {
//     const todo = new Todo(req.body);
//     await todo.save();
//     res.json(todo);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get all todos
// router.get('/', async (req, res) => {
//     const todos = await Todo.find();
//     res.status(200).json(todos);
// });
// // Update a todo
// router.put('/:id', async (req, res) => {
//     const todo = await Todo.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//     );
//     res.status(200).json(todo);
// });
// // Delete a todo
// router.delete('/:id', async (req, res) => {
//     await Todo.findByIdAndDelete(req.params.id);
//     res.status(204).end();
// });
module.exports = router; ///
