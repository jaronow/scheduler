module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    name: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    admin: {
      type: DataTypes.BOOLEAN
    }
  });
