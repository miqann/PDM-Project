var express = require('express');
var path = require('path');
var app = express();
var port = 1080;


var authorsRouter = require('./routes/author'); //router to author

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));   

//access cross origin (cors)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use('/user/:id', function (req, res, next) {
//   console.log('Request Type:', req.method);
//   console.log('Request URL:', req.originalUrl);
//   next()
// },function (req, res, next) {
//   console.log('Request Type:', req.method)
//   next()
// })

// app.get('/user/:id', function (req, res, next) {
//   res.send('USER')
// })
app.use('/users', authorsRouter);  // /users is api to call

// start at port 1080
  app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  

    