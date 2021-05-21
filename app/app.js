const express = require('express');

const App = express();

const Pet = require('./routes/pet');

App.use(express.json());

App.use('/pet', Pet);

module.exports = App;
