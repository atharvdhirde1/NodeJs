const restify = require('restify');

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/hello', (req, res, next) => {
    res.header('header-custom','secret-token')
    res.send('Hello, world!');
    return next();
});



server.post('/endpoint', function (req, res, next) {
  // Handle the POST request here
  const data = req.body; // Get the JSON data from the request body
  console.log(data); 
  res.send(data);
  return next();
});

server.get('/data', function (req, res, next) {
    // Handle the GET request to retrieve the JSON data
    const data = {}; // 
    res.json(data);
  
    return next();
  });

  server.listen(4000, () => {
    console.log('%s listening at %s', server.name, server.url);
  });