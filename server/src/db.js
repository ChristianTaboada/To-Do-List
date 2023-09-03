require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require ('path');
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, DB_NAME } = process.env;

//Localhost
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`, {
    logging: false,
    native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];
//leer todos los archivos sin errores
fs.readdirSync(path.join(__dirname, '/models'))
 .filter((file) => (file.indexOf('.') !==0) && (file !==basename) && (file.slice(-3) === '.js'))
 .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
 });

//conexion sequelize a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//para relacionarlos hacemos un destructuring

let {User, Todo, Sharedtodo} = sequelize.models;

User.hasMany( Todo, {foreignKey: 'user_id'});
Todo.belongsTo( User, { foreignKey: 'user_id'});

User.belongsToMany( Todo, { through: Sharedtodo, foreignKey: 'user_id' });
Todo.belongsToMany( User, { through: Sharedtodo, foreignKey: 'todo_id'});

Sharedtodo.belongsTo( User, { foreignKey: 'user_id', as: 'shared_by' });
Sharedtodo.belongsTo( User, { foreignKey: 'shared_with_id', as: 'shared_with' });
Sharedtodo.belongsTo( Todo, { foreignKey: 'todo_id' });

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};

