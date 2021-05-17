const { Sequelize, DataTypes, Model } = require('Sequelize');
const db = require('../../config/database');

const LoginStatus = db.define('LoginStatus', {
    LoginStatusId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        isInt: true,
        allowNull: false,
        len: [10],
        primaryKey: true,
    },
    LoginStatusName: {
        type: DataTypes.STRING(40),
    }
    },{
        timestamps: false,
});

module.exports = LoginStatus;
