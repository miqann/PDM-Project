var express = require('express');
var path = require('path');
var app = express();
var port = 1080;


var usersRouter = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

  app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  