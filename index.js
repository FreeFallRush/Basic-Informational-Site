// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// const PORT = 8080;

// const server = http.createServer((req, res) => {
//   let filePath;

//   switch (req.url) {
//     case "/":
//       filePath = "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       filePath = "about.html";
//       res.statusCode = 200;
//       break;
//     case "/contact-me":
//       filePath = "contact-me.html";
//       res.statusCode = 200;
//       break;
//     default:
//       filePath = "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path.join(__dirname, filePath), "utf8", (err, data) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Server error");
//       return;
//     }

//     res.writeHead(res.statusCode, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

//////////////
//Express

const express = require("express");
const path = require("path");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "about.html"))
);

app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "contact-me.html"))
);

app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname, "404.html"))
);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
