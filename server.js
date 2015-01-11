(function() {
  var express, message, port, server;

  message = require('./message');

  express = require('express');

  server = express();

  server.get(/^(.+)$/, function(req, res) {
    console.log('static file request : ' + req.params[0]);
    return res.sendFile(__dirname + '/public/' + req.params[0]);
  });

  port = process.argv[2] ? process.argv[2] : 8080;

  server.listen(port);

  console.log('Server listening on port ' + port + ', ' + message());

}).call(this);
