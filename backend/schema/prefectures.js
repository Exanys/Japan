const mongoose = require("mongoose");

const prefectureSchema = mongoose.Schema({
    _id:{ type: Number, required: true},
    data:{ type: Array, required: true}
},{collection: 'Japan_geo'});

const Prefecture = mongoose.model('Prefecture', prefectureSchema);

module.exports = Prefecture;