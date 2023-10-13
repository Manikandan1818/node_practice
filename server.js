const fs = require("fs");
const http = require("http");
const PORT = 1818;

const server = http.createServer((req, res) => {
  res.writeHead(400, { "content-Type": "text/html" });
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Page not Found!");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is running " + PORT);
  }
});
