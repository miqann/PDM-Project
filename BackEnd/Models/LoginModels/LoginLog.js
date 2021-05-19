const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

const LoginLog = db.define('LoginLog', {
    LoginId: {
        type: DataTypes.INTEGER,
        autoIncrement:true, 
        isInt: true,
        allowNull: false,
        len:[9],
        primaryKey: true,
    },
    Times: {
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW,
        allowNull: false,
    },
    PlaceLogin: {
        type: DataTypes.STRING(40),
    },
    Descriptions: {
        type:DataTypes.STRING(40),
    },
    Login: {
        type: DataTypes.STRING(40),
    },
    Password: {
        type: DataTypes.STRING(40),
    },
    LoginStatusId: {
        type: DataTypes.INTEGER,
    },
    AccountId: {
        type: DataTypes.INTEGER
    }
    },{
        timestamps: false,
});

module.exports = LoginLog;
