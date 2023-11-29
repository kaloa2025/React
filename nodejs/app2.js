var https=require('http');
https.createServer(function(req,res){
    res.writeHead(301,{Location:'http://www.rknec.edu'}).end();
}).listen(8001);