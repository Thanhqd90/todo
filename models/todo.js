module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("todo", {
      id: {
          type:DataTypes.INTEGER,
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
    },{
        timestamps: true,
        createdAt: true,
        updatedAt: 'updateTimestamp',
        freezeTableName: true
    })
    return Todo;
  };
  