var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World Prueba');
})

app.listen(3000);