const express = require('express'); // routes
const cors = require('cors');
const routes = require('./routes');

const app = express(); // Create appliaction

app.use(cors());
app.use(express.json()); // convert json after request to javascript object
app.use(routes);

app.listen(3333);