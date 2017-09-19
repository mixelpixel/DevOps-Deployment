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

app.get('/', (request, response) => {
  response.send('SO AMAZING! Out and about in the REAL!! Hello World!\n');
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
