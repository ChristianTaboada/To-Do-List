const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('sharedtodo', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        todo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          shared_with_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    })
}
