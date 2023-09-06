const { Router } = require('express');
const router = Router();
const { createUserHandler, getUserHandler} = require('../handlers/userHandler');

router.post("/", createUserHandler);

router.get("/:userId",getUserHandler )

module.exports = router;