const {User} = require('../db')

const createUser = async (name, email, password) => {
    try {
        const user = await User.create ({ 
            name,
            email,
            password
        });
        return user;
    } catch (error){
        console.log(error)
        res.status(500).json({error: "Error al crear el usuario"})
    }
}

module.exports = {
    createUser,
}