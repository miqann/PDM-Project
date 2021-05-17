const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

const LoginLog = db.define('LoginLog', {
    LoginId: {
        type: DataTypes.INTEGER,
        autoIncrement:true, 
        isInt: true,
        allowNull: false,
        len:[10],
        primaryKey: true,
    },
    Times: {
        type: DataTypes.DATE,
    },
    PlaceLogin: {
        type: DataTypes.STRING(40),
    },
    Description: {
        type:DataTypes.STRING(40),
    },
    Login: {
        type: DataTypes.STRING(40),
    },
    Password: {
        type: DataTypes.STRING(40),
    }
    },{
        timestamps: false,
});

module.exports = LoginLog;
