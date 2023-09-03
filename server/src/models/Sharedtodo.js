const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('sharedtodo', {
        todo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.UUID,
            allowNull: false,
          },
          shared_with_id: {
            type: DataTypes.UUID,
            allowNull: false,
          },
    })
}
