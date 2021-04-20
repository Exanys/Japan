
const router = require('express').Router();
let Island = require('../schema/islands');

router.route('/').get((req, res) => {
    Island.find()
    .then(islands => res.json(islands))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/pref/:name').get((req, res) => {
    const name = req.params.name;
    Island.findOne({ prefectures: {$all : [name]}})
    .then(island => res.json(island.name))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:name').get((req, res) => {
    const name = req.params.name;
    Island.findOne({ name})
    .then(island => res.json(island))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

