import TodoService from "../Todo/todo.service.js";

async function getAll(req, res) {
  try {
    const tasks = await TodoService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getById(req, res) {
  try {
    const task = await TodoService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const newTask = await TodoService.createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const updated = await TodoService.updateTask(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    await TodoService.deleteTask(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export default { getAll, getById, create, update, remove };
