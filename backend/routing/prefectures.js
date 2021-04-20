const router = require('express').Router();
let Prefecture = require('../schema/prefectures');

router.route('/').get((req, res) => {
    Prefecture.find()
    .then((prefectures) => res.json({features: [prefectures[0].data], type: "FeatureCollection"})) 
    .catch((err) => res.status(400).json('Error: ' + err));
});




module.exports = router;