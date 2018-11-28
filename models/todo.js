module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("todo", {
      id: {
          type:DataTypes.STRING,
          primaryKey:true,
          autoIncrement:true,
        },
      todo: DataTypes.STRING,
      accomplished:{
          type:DataTypes.BOOLEAN,
          defaultValue:false,
      },
      createdAt:DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
    return Todo;
  };
  