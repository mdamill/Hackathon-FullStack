const { DataTypes } = require('sequelize');
const db = require('../config/user');

const User = db.define('User', {
firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    ph: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
User.sync({alter:true})
