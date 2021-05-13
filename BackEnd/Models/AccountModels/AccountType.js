const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../config/database');

//define table AccountType
const AccountType = db.define('AccountType', {
    AccountTypesCode: {
        type: DataTypes.INTEGER,
        isInt: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,   
    },
    AccountTypeDescription: {
        type: DataTypes.STRING(40),
    }
}, {
    timestamps: false,
});

module.exports = AccountType;