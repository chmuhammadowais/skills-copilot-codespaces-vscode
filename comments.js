// Create web server
// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Write a response body
  res.write('Hello, this is a JavaScript web server example');
  // End the response
  res.end();
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
