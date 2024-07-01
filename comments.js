// Create web server
// Create a web server that listens to incoming requests and sends back a response to the client. The server will listen on port 3000. It will have one route: /comments. When the client makes a GET request to /comments, the server will respond with an array of comments. The comments array will have a few comments stored as strings. Use the JSON.stringify() method to send the comments array as a JSON string.

const http = require('http');

const comments = ['This is a comment', 'This is another comment'];

const server = http.createServer((req, res) => {
    if (req.url === '/comments' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
// Run the code and open your browser to http://localhost:3000/comments. You should see the comments array displayed in the browser. If you go to http://localhost:3000/another-route, you should see the message Route not found displayed in the browser.