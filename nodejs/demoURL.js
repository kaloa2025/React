var url=require('url');
var adr='https://github.com/kaloa2025';

var q=url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata=q.query;
console.log(qdata.month);