const {Sequelize} = require('sequelize'); // get sequelize

// create and connect to mysql database
var db = new Sequelize('banking', 'root', 'pa', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        useUTC: false,
    },
    timezone: "+07:00",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },query: {
        raw:true,
    }
});

//test connection
db.authenticate() 
    .then(() => {
        console.log('connected to database')
    }).catch((err) => {
        console.log(err);
    });

module.exports = db;