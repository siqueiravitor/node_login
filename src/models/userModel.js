const { DataTypes, Sequelize } = require('sequelize');
const createConnection = require('../config/dbSqLite');

const User = createConnection.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
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
    status: {
        type: DataTypes.ENUM,
        values: ['active', 'inactive', 'blocked'],
        defaultValue: 'active',
        allowNull: false
    },
}, {
    tableName: 'users'
});

module.exports = User;
