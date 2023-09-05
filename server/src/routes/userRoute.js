const { Router } = require('express');
const router = Router();
const { createUserHandler} = require('../handlers/userHandler');

router.post("/", createUserHandler);

module.exports = router;