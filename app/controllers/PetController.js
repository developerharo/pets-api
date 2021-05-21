const Pet = require('../models/Pet');

function index(req, res) {
    Pet.find({})
        .then((pets) => {
            if (pets.length) return res.status(200).send({ pets });
            return res.status(204).send({ message: 'NO CONTENT' });
        })
        .catch((error) => res.status(500).send({ error }));
}

function create(req, res) {
    new Pet(req.body)
        .save()
        .then((pet) => res.status(201).send({ pet }))
        .catch((error) => res.status(500).send({ error }));
}

function remove(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.pets) return res.status(404).send({ message: 'NOT FOUND' });
    req.body.pets[0]
        .remove()
        .then((pet) => res.status(200).send({ message: 'REMOVED', pet }))
        .catch((error) => res.status(500).send({ error }));
}

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    Pet.find(query)
        .then((pets) => {
            if (!pets.length) return next();
            req.body.pets = pets;
            return next();
        })
        .catch((error) => {
            req.body.error = error;
            next();
        });
}

module.exports = {
    index,
    create,
    remove,
    find,
};
