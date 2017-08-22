const http = require('http')
const queryString = require('querystring')

http.createServer(function(req, res){
    var baseUrl = req.url

    var arr = baseUrl.split('?')

    var queryUrl = queryString.parse(arr[1])

    console.log(queryUrl)

    res.write('world')
    res.end()
}).listen(8080)