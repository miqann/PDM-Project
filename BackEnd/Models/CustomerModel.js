const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../config/database');

//define table Customer
const Customer = db.define('Customer',{
    CustomerId: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },
    CustomerName: { type: DataTypes.STRING(40) },
    CustomerPhone: {type: DataTypes.INTEGER},
    CustomerEmail: {type: DataTypes.STRING(40)},
    City: {type: DataTypes.STRING(40)},
}, {
    timestamps: false,
});


module.exports = Customer;
db.sync(); //compare to database