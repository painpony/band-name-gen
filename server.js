var http = require('http'),
	express = require('express');

var app = express();
http.createServer(app);
app.use(express.static(__dirname));
app.listen(9999, 'localhost', function() {
    console.log('%s: Node server started on %s:%d ...',
    Date(Date.now() ), 'localhost', 9999);
});