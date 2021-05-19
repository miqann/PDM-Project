const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

//define transaction type table
const transactionType = db.define('TransactionType',{
    TransactionTypesId: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        isInt: true,
        allowNull:false,
        len: [10],
        primaryKey: true,
    },
    TransactionTypesName: {
        type: DataTypes.STRING(40),

    },
    TransactionTypesDescription: {
        type: DataTypes.STRING(40),
    },
    TransactionFee: {
        type: DataTypes.INTEGER,
        isInt: true,
    }
},{
    timestamps:false,
});
module.exports = transactionType;