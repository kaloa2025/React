var express=require('express');
var app=express();

app.get('/get_example',function(req,res){
    res.send('<p>Firstname: '+req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>')
});
var server=app.listen(9000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('Example listening at http://%s/%s',host,port);
});