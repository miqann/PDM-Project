const express = require('express');
const app = express();
const port = 3001;

//connect to database
const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize('books', 'root', 'pa', {
  host:'localhost', 
  dialect: 'mysql',
  logging: console.log,
})

var testConnection = async () => {
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
  console.log(sequelize.connectionManager);
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}
testConnection();
console.log(69);

class Author extends Model {}

Author.init({
  authorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'author' // We need to choose the model name
});

// the defined model is the class itself
console.log(Author === sequelize.models.Author); 


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/', (req, res) => {
  var rand = Math.round(Math.random() *10);
    res.send(JSON.stringify(rand));
    console.log('sent');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })




