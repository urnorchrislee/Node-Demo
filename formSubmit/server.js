const http = require('http')
const fs = require('fs')

http.createServer(function(req, res){
    
    var baseUrl = req.url
    var GET = {}

    if(baseUrl.indexOf('?') !== -1){
        var arr1 = baseUrl.split('?') // ['/aaa', 'name=111&pass=222]

        console.log(arr1);

        var url = arr1[0]
        var arr2 = arr1[1].split('&') // ['name=111', 'pass=222']

        for(var i=0; i<arr2.length; i++){
            var arr3 = arr2[i].split('=')
            GET[arr3[0]] = arr3[1]
        }
    } else{
        var url = baseUrl;
        GET = {}
    }

    console.log(url, GET);

    res.write('hello world')
    res.end()

}).listen(8080)