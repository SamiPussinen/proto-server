message = require('./message')
express = require('express')

server = express()
server.get(/^(.+)$/, (req, res) ->
	console.log('static file request : ' + req.params[0])
	res.sendFile( __dirname + '/public/' + req.params[0])
)

port = if process.argv[2] then process.argv[2] else 8080
server.listen(port)
console.log('Server listening on port ' + port + ', ' + message())
