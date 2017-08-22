const http = require('http')

var server = http.createServer(function(req, res){

    console.log(req.url)

    if(req.url == '/'){
        res.write('/')
        res.end()
    } else if(req.url == '/favicon.ico'){
        res.write('/favicon.ico')
        res.end()
    }

    // res.write('this is server2.js')
    
})

server.listen(8080)