const { Router } = require('express')
const TodoController = require('../controllers/todo.controller')
const router = Router();


router.post('/todo/new', TodoController.newTodo)
router.get('/', TodoController.getTodos)
router.get('/todo/:id', TodoController.getOneTodo)
router.put('/todo/update/:id', TodoController.updateTodo )
router.delete('/todo/delete/:id', TodoController.deleteTodo)

module.exports = router;