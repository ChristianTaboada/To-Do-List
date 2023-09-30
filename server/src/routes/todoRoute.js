const { Router} = require('express')
const { createTodoHandler, getTodoByUserIdHandler} = require('../handlers/todoHandler')

const router = Router()

router.post('/', createTodoHandler);
router.get('/:userId', getTodoByUserIdHandler);

module.exports = router;