import http from "http"

http.createServer((req,res)=>{
    console.log("server is running !!");
    res.writeHead(200,{
        'Content-Type':'text/plain'
    })
    res.end("Module app is running")
}).listen(8081)