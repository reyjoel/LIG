// node index.js
//npm run scss

var express = require('express');
var app = express();

//set view engine
app.set("view engine","jade");

app.use(
    express.static(__dirname + '/public')
);

app.get('/', function (req, res) {
    res.render('sample');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});