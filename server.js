var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var likeRouter = require('./routes/likes');
var bioRouter = require('./routes/bios');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

// app.post('/',function (req, res){
//   console.log('req.body=', req.body);
//   res.sendStatus(200);
// })


app.use('/likes', likeRouter);
app.use('/bios', bioRouter);
console.log('bios', bioRouter);

app.use(function(req, res, next){
  console.log('Got a request');
  next();
})




app.get('/', function (req, res) {
  console.log('Received a request at', new Date() + '');
  //__dirname corresponds to express_intro
  var file = path.join(__dirname, 'public/views/index.html');
  console.log('file', file);
  res.sendFile(file);
});


app.listen(3000);
