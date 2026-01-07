const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer((req, res) => {
  let filePath;

  switch (req.url) {
    case "/":
      filePath = "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      filePath = "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      filePath = "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      filePath = "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path.join(__dirname, filePath), "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server error");
      return;
    }

    res.writeHead(res.statusCode, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
