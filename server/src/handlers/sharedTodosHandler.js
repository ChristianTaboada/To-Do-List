const {getSharedTodos, createSharedTodo} = require("../controllers/sharedTodosController");

const getSharedTodosHandler = async (req, res) => {
    try{
        const {id} = req.params;
        const sharedTodos = await getSharedTodos(id);
        res.status(200).json(sharedTodos)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Error interno del servidor"})
    }
};

const shareTodoHandler = async (req, res) => {
    try{
        const {todoId, sharedWithUserId } = req.body;
        //const userId = req.user.id
        const userId = 1

        const sharedTodo = await createSharedTodo(todoId, userId, sharedWithUserId);

        res.status(200).json(sharedTodo)
    } catch (error){
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor'})
    }
}

module.exports = {
    getSharedTodosHandler,
    shareTodoHandler
}