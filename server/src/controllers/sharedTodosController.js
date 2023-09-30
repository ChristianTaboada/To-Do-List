const {Sharedtodo} = require("../db");

const getSharedTodos = async (userId) => {
    try {
        const sharedTodos = await Sharedtodo.findAll({
            where: {shared_with_id: userId },
        });
        return sharedTodos
    }catch(error) {
        throw error;
    }
};

const createSharedTodo = async (todoId, userId, sharedWithUserId) => {
    try{
        const sharedTodo = await Sharedtodo.create({
            todo_id: todoId,
            user_id: userId,
            shared_with_id: sharedWithUserId
        })
        return sharedTodo
    }catch (error) {
        throw error
    }
}

module.exports = {
    getSharedTodos,
    createSharedTodo
};
