const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/database');

//define table author
const author = db.define('author', {
    authorID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING,
    }
}, {
        timestamps: false
    })
db.sync(); //compare to database
module.exports = author;
