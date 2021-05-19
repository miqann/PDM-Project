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
    CustomerId: {
        type: DataTypes.INTEGER,
        isInt: true,
        allowNull:true,
    },
    AccountName: {
        type: DataTypes.STRING (40),
    },
    DateOpened: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:DataTypes.NOW,
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
    AccountTypesCode: {
        type: DataTypes.INTEGER
    },
    AccountStatusId: {
        type: DataTypes.INTEGER,
    }
},{
    timestamps: false,
});

module.exports = Account;
