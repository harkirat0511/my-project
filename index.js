const http = require('http');
const port = 3001; 

const requestHandler = (request, response) => {
  response.end('Hello, World!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error:', err);
  }
  console.log(`Server is listening on ${port}`);
});
