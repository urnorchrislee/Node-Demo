const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer(function(req, res){
    var baseUrl = req.url

    // GET
    var queryUrl = url.parse(baseUrl, true)
    var pathName = queryUrl.pathname
    var queryStr = queryUrl.query

    console.log(pathName, queryStr)

    //POST
    var str = ''
    var i=0
    req.on('data', function(data){
        console.log(`第${i++}次接收到数据`)
        str+=data
    })
    req.on('end', function(err){
        console.log(str)
    })

    res.write('hello world')
    res.end()
}).listen(8080)