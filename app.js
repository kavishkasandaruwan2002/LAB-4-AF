const http = require('http');
const https = require('https');
const fs = require('fs');

// ---------- Async/Await Example ----------
const asyncPromise = Promise.resolve("Success!");

async function asyncExample() {
  try {
    const result = await asyncPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

asyncExample();

// ---------- Promise Example ----------
const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) resolve('Success!');
  else reject('Failure!');
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// ---------- Write File ----------
fs.writeFile('file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');

  // ---------- Read File ----------
  fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log('File content:', data);
  });
});

// ---------- Web Server ----------
// ---------- Web Server ----------
const PORT = Number(process.env.PORT) || 8080;
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello World!');
  res.end();
});

function startServer(port) {
  server.listen(port, () => console.log(`Server listening on port ${port}`));
}

server.on('error', (err) => {
  if (err && err.code === 'EADDRINUSE') {
    const altPort = PORT + 1;
    console.error(`Port ${PORT} in use. Attempting ${altPort}...`);
    server.listen(altPort);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});

startServer(PORT);

// ---------- Module Function ----------
function myModuleFunction() {
  return "Hello from Imesha";
}

// ---------- HTTPS API Request ----------
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});



module.exports = { myModuleFunction };