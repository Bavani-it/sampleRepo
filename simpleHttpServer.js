var http=require('http');
var server=http.createServer(function onRequest(require,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('This is a simple Http Server');
    response.end();
}).listen(3000);