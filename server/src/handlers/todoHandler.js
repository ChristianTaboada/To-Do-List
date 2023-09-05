const {createTodo, getTodoByUserId} = require('../controllers/todoController');

const getTodoByUserIdHandler = async (req, res) => {
    try {
        const {userId} = req.params
        console.log(userId) // Obtener el userId de los parametros de la solicitud
        const todos = await getTodoByUserId(userId) // Llamar a la funcion con el userId
        res.status(200).json(todos)
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Error interno del servidor"})
    }
}

const createTodoHandler = async (req, res) => {
    try {
        const {title, completed, userId} = req.body; //Obtener los datos del cuerpo de la solicitud
        const todo = await createTodo(title, completed, userId)
        res.status(201).json(todo)
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Error interno del servidor en handler"})
    }
}


module.exports = {
    createTodoHandler,
    getTodoByUserIdHandler
}