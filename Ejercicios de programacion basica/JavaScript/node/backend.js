console.log("Arrancando server de Node");

var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.send('<a href= "/clase1">clase 1</a>')
})

app.get('/clase1', (req, res) => {
    res.send('contenido clase 1 mas prueba de git')
})
app.listen(3000);
console.log("escuchando en el puerto 3000");