const express = require('express');

// Importar variables de entorno locales
require('dotenv').config({ path: 'variables.env' });

console.log(process.env.DB_URL);

const App = express();

const Pet = require('./routes/pet');

App.use(express.json());

App.use('/pet', Pet);

module.exports = App;
