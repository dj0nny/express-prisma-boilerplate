const router = require('express').Router();

const { getAllTodo, getTodo, deleteTodo, createTodo, updateTodo } = require('../controllers/todo.controller')

router.get('/all', getAllTodo);
router.get('/:todoId', getTodo);
router.post('/', createTodo);
router.delete('/:todoId', deleteTodo);
router.put('/:todoId', updateTodo);

module.exports = router;