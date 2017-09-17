/* eslint no-console: 0 */
/**************************************
 * Express Setup
  *************************************/
const express = require('express');
const app = express();

/**************************************
 * Server!
  *************************************/

const PORT = 8080;
const HOST = '0.0.0.0';
const server = app.listen(PORT, HOST, () => {
  console.log('server online');
});

/**************************************
 * Endpoint
  *************************************/

app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));
// const path = require('path');

app.get('/', (request, response) => {
  // response.send('Hello World!\n');
  // response.sendFile('index.html', {root: __dirname });
  // response.sendFile(path.join(__dirname + '/index.html'));
  response.sendFile('index.html');
});

app.get('/version', (request, response) => {
  response.send('1.0.0\n');
  Array.forEach(request, (key) => {
    axios.get('myspecialserver/requestdistributor', (result) => {
      axios.get('database', (result) => {
        // all this stuff takes a really long time
      });
    });
  });
});
