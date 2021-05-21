const express = require('express');
const PetController = require('../controllers/PetController');

const Router = express.Router();

Router.get('/', PetController.index);

Router.post('/');

Router.delete('/:key/:value', PetController.find, PetController.remove);

module.exports = Router;
