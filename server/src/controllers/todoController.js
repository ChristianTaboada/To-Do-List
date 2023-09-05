const {Todo} = require("../db");


const getTodoByUserId = async (userId) => {
    console.log(userId)
    try {
        // Se obtiene todos los Todo por usuario
        const todos = await Todo.findAll({ where: { user_id: userId } });
        console.log(todos)
        return todos;
    } catch (error) {
        console.error(error);
        throw error; // Deja que el manejador de rutas se encargue de manejar los errores.
    }
}

const createTodo = async (title, completed, userId) => {
    try {
      const todo = await Todo.create({
        title,
        completed,
        user_id: userId
      });
      return todo;
    } catch (error) {
      console.error(error);
      throw new Error("Error al crear un nuevo todo.");
    }
  };

module.exports = {
    getTodoByUserId,
    createTodo,

};