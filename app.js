const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => {
  console.log('server is running http://localhost:3000');
});
