const http = require('http')
const url = require('url')

http.createServer(function(req, res){

    var baseUrl = req.url

    var parseUrl = url.parse(baseUrl, true)

    console.log(parseUrl.pathname, parseUrl.query)

    res.write('hello')
    res.end()

}).listen(8080)