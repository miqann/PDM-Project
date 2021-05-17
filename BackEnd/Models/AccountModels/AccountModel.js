const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

//define table Account
const Account = db.define('Account', {
    AccountId: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        isInt: true,
        len: [13],
        allowNull:false,
        primaryKey: true,
    },
    AccountName: {
        type: DataTypes.STRING (40),
    },
    DateOpened: {
        type: DataTypes.DATE,
        isDate: true,
    },
    CurrentBalance: {
        type: DataTypes.INTEGER,
        len: [3,40],

    },
    Login: {
        type: DataTypes.STRING(40),
    },
    Password: {
        type: DataTypes.STRING(40),
    },
},{
    timestamps: false,
});

module.exports = Account;
