const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

//define table CustomerTypes
const customerType = db. define('CustomerType', {
    CustomerTypesCode : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        len: [9,10],
        isInt: true,
        allowNull: false,
        primaryKey: true,
    },
    CustomerTypeDescription: {
        type: DataTypes.STRING(40),
    },
    },{
        timestamps: false,
});

module.exports = customerType;

