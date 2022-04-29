const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('node start1');
  res.end('node start2');
});

server.listen(port, hostname, () => {
  console.log(`백틱안에 달러중괄호 함수명 ${hostname}`);
  console.log(`Server running at http://${hostname}:${port}/`);
});