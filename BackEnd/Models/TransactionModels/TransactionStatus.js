const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

//define table Customer
const transactionStatus = db.define('TransactionStatus',{
    TransactionStatusId: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        isInt: true,
        allowNull:false,
        len: [12],
        primaryKey: true,
    },
    TransactionStatusName: { type: DataTypes.STRING(40)},
}, {
    timestamps: false,
});


module.exports = transactionStatus;