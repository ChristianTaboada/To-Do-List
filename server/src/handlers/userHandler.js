const {User} = require('../db')
const {createUser} = require('../controllers/userController')

const createUserHandler = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({ error: "Debes proporcionar un nombre, email o contraseña validos"})
        }

        const existingUser = await User.findOne({ where: { email }});
        if(existingUser) {
            return res.status(400).json({ error: "El correo electronico ya esta en uso"})
        }

        const newUser = await createUser(
            name,
            email,
            password
        );
        res.status(200).json(newUser)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "error interno del servidor"})

    }
}

module.exports = {
    createUserHandler,
};
