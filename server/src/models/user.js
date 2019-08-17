module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    admin: {
      type: DataTypes.BOOLEAN,
      
    }
  });
  return User
};
