var app = require('express')();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('API by node.js');
});

app.get('/hello-world', function (req, res) {
    var time = new Date();
    console.log('Hello World :' + time);
    res.send('Hello World');
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
