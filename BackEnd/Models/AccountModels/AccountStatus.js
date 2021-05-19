const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

//define table AccountStatus

const AccountStatus = db.define('AccountStatus', {
    AccountStatusId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        isInt: true,
        allowNull: false,
        primaryKey: true,
    },
        AccountStatusDescription: {
            type:DataTypes.STRING(40),
        }
});

module.exports = AccountStatus;