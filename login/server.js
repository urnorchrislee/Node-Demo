const http = require('http')
const fs = require('fs')
const urlLib = require('url')
const queryString = require('querystring')

var users = {}

http.createServer(function(req, res){
    var str = '';
    res.on('data', function(err, data){
        str += data
    })
    res.on('end', function(){
        console.log(str)
    })
    // 数据解析
    var obj = urlLib.parse(req.url, true)
    const url = obj.pathname
    const GET = obj.query
    const POST = queryString.parse(str)

    const file_name = './www' + url;

    // 区分接口还是文件
    if(url == '/user'){ // 接口

        console.log(GET);

        // 注册 还是 登录
        if(GET.act == 'reg'){ // 注册
            // 1.用户名是否已经存在
            // 2.插入用户

            if(users[GET.user]){
                res.write('{"ok": false, "msg": "用户名已存在"}')
            } else{
                users[GET.user] = GET.pass
                res.write('{"ok": true, "msg": "注册成功"}')
            }
        } else if(GET.act == 'login'){ // 登录
            // 1.用户名是否存在
            // 2.密码是否正确
            // 3.登陆成功

            if(users[GET.user] == null){
                res.write('{"ok": false, "msg": "用户不存在"}')
            } else if(users[GET.user] != GET.pass){
                res.write('{"ok": false, "msg": "密码错误"}')
            } else{
                res.write('{"ok": true, "msg": "登陆成功"}')
            }
        } else{
            res.write('what are U 弄啥类')
        }
        res.end()
    }else{ // 文件
        fs.readFile(file_name, function(err, data){
            if(err){
                res.write('404')
            }else{
                res.write(data)
            }
            res.end()
        })
    }

}).listen(8080)