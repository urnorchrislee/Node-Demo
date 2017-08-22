const fs = require('fs')

fs.readFile('./README.md', function(err, data){
    console.log(err)
    console.log(data.toString())
})