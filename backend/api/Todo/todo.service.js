import TodoTask from "../Todo/todo.model.js";

const getAllTasks = async () => await TodoTask.getAll();
const getTaskById = async (id) => await TodoTask.getById(id);
const createTask = async (data) => await TodoTask.create(data);
const updateTask = async (id, data) => await TodoTask.update(id, data);
const deleteTask = async (id) => await TodoTask.remove(id);

export default { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
