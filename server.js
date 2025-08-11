const http = require ("http");
const host = "27.0.0.1";
const port = 3000;
cont server = http.createServer((req, res)=>{
    res.statuscode = 200;
    res.setHeader ("Content_Type", "text/plain");
    res.and ("Minha primeira aplicação node.");
});

server.listen(port, host, () => {
    console.log("Servidor rodando na porta $ (port)"); 
});