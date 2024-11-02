const { Sequelize } = require('sequelize');
const path = require('path');

const createConnection = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../database/database.sqlite')
});

module.exports = createConnection;
