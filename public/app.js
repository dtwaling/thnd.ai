const http = Require('http')
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>THND.ai is live!</h1><br/>');
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});