const { Router} = require('express')
const router = Router()
const { createTodoHandler, getTodoByUserIdHandler} = require('../handlers/todoHandler')

router.post('/', createTodoHandler);
router.get('/:userId', getTodoByUserIdHandler);

module.exports = router;