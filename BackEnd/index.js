
const express = require('express');
const path = require('path');
const db = require('./config/database');
const app = express();
const port = process.env.PORT || 1080;
const cors = require('cors');
const bodyParser = require('body-parser');
const association = require('./Models/association');


var CustomerRoute = require('./routes/CustomerRoute'); //router to author
var LoginRoute = require('./routes/loginRoute');
var RegisterRoute = require('./routes/registerRoute');
var AccountRoute = require('./routes/AccountRoute');
var LoginLog = require('./routes/loginLogRoute');
var Query = require('./routes/QueryRoute');
var Transfer = require ('./routes/TransferRoute');


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));   

//access cross origin (cors)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  next();
});

app.use('/customers', CustomerRoute);  // /users is api to call
app.use('/login', LoginRoute);
app.use('/register', RegisterRoute);
app.use('/account', AccountRoute);
app.use('/loginlog', LoginLog);
app.use('/query', Query);
app.use('/transfer', Transfer);

db.sync()
  .then(result => app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }))
    .catch(err => console.log(err));