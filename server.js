const http = require("http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ok");
    return;
  }
  console.log(`${req.method} ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Olá, mundo!</h1><p>Hello no ar pelo shpyrd.</p>");
});

server.listen(port, () => {
  console.log(`Hello ouvindo na porta ${port}`);
});
