const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

//define transactionlog table
const TransactionLog = db.define('TransactionLog', {
    TransactionId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        isInt: true,
        len:[10],
        primaryKey: true,
    },
    TransactionDate: {
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW,
        allowNull:false,
    },
    TransactionAmount: {
        type: DataTypes.INTEGER,
    },
    TransactionPlace: {
        type: DataTypes.STRING(40),
    }
},{
    timestamps: false,
});
module.exports = TransactionLog;
