//blocking & unblocking 

//#BLOCKING - one job will block others until it finishes
// const fs=require('fs')
// const data=fs.readFileSync('abc.txt','utf-8');
// console.log(data);
// console.log("Blocking Code"); // will run after console.log

//#Non-Blocking
// const fs=require('fs')
// fs.readFile('abc.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });
// console.log("Non-Blocking Code");
//utf-8 : code dikhaenga , hata do content dikhaenga
// res-> response

//Sync callback
// function greetings(callback)
// {
//     callback();
// }
// greetings(()=>{console.log('Hi');});
// console.log("Sync Callback");

//Async Callback
const fs=require('fs')
fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
console.log("Non-Blocking Code 1");
fs.readFile('index.html','utf-8',(err,data)=>{
    if(err) throw  err;
    console.log(data);
})
console.log("Non-Blocking Code 2");

//