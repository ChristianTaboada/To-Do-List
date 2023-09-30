const { Router } = require('express');
const todoRoute = require('./todoRoute');
const userRoute = require('./userRoute');
const sharedTodo = require('./sharedTodoRoute');

const router = Router();


router.use('/todo', todoRoute);

router.use('/user', userRoute)

router.use('/shared-todo', sharedTodo)

router.get('/test', (req,res) => {
    console.log('Solicitud a /test recibida');
    res.status(200).json({message: "La aplicacion funciona correctamente"})
})

module.exports = router;