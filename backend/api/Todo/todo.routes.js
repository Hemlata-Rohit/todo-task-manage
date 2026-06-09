import express from 'express';
const router = express.Router();
import TodoController from "../Todo/todo.controller.js";


router.get('/',TodoController.getAll);
router.get('/:id', TodoController.getById);
router.post('/', TodoController.create);
router.put('/:id',TodoController.update);
router.delete('/:id',TodoController.remove);

export default router;
