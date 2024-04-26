const {createServer} = require("http")

let server = createServer((request, response) => {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
        <h1>Hello Word!</h1>
        <p>Pagina Com Node<p/>
    `); 
    response.end();
})
server.listen(8000);

console.log("Ouvindo a porta 8000");