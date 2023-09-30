const { Router } = require('express');
const { createUserHandler, getUserHandler} = require('../handlers/userHandler');

const router = Router();

router.post("/", createUserHandler);

router.get("/:userId",getUserHandler )

module.exports = router;