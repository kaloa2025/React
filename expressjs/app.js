var express=require('express')
var app=express()
app.get('/',function(req,res){
    res.send('HelloWorld');
})
app.listen(3000,function()
{
    console.log('Example listening on port 3000');
})