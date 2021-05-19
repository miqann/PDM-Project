const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

//define table Customer
const Customer = db.define('Customer',{
    CustomerId: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        isInt: true,
        allowNull:false,
        len: [12],
        primaryKey: true,
    },
    CustomerName: { type: DataTypes.STRING(40) },
    CustomerPhone: { 
        type: DataTypes.STRING(12),
    },
    CustomerEmail: {
        type: DataTypes.STRING(40),
        isEmail: true,
    },
    City: {type: DataTypes.STRING(40)},
}, {
    timestamps: false,
});


module.exports = Customer;
