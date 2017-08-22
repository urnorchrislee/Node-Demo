const http = require('http')

var server = http.createServer(function(req, res){
    res.write('hello node')
    res.end()
})

server.listen(8080)