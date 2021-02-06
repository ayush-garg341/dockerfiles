const HTTP_PORT = 80;

const cors = require('cors');
const express = require('express');
const path = require('path');

var sourcesDirectory = path.resolve(__dirname, 'www');
console.log("source directory ============= ", sourcesDirectory);

var app = express();
app.use(cors());

// API
app.get('/v1/square/:value', function (req, res) {
    const value = req.params.value;
    const square = Math.pow(value, 2);
    res.send({
        value,
        square 
    });
});

// Static files
// app.use(express.static(sourcesDirectory, {
//     index: 'index.htm',
//     extensions: ['htm']
// }));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.htm');
});

var server = require('http').createServer(app);
server.listen(HTTP_PORT);

console.log(`Listening on http://localhost:${HTTP_PORT}`);
