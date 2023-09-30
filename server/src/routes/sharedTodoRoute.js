const { Router } = require('express');
const { getSharedTodosHandler, shareTodoHandler } = require('../handlers/sharedTodosHandler')

const router = Router()

router.get('/:id', getSharedTodosHandler);
router.post('/', shareTodoHandler);

module.exports = router;