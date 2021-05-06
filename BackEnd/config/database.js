const {Sequelize} = require('sequelize');
var db = new Sequelize('books', 'root', 'pa', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});
db.authenticate() 
    .then(() => {
        console.log('connected to database')
    }).catch((err) => {
        console.log(err);
    });

module.exports = db;