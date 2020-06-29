'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello in there');
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist'));

app.listen(PORT, () =>
  console.log(`server is running on PORT: ${PORT}`)
);
