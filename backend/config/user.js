const { Sequelize } = require('sequelize');
const db = new Sequelize('newdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}
);

module.exports = db;