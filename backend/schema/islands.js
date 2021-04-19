const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const islandSchema = mongoose.Schema({
    _id: { type: Number, required: true},
    name: { type: String, required: true },
    largest_city: { type: String, required: true },
    area: { type: Number, required: true },
    population: { type: Number, required: true },
    prefectures: { type: Array, required: true },
    highest_point: { type: String, required: true},
    about: { type: Array, required: true },
    images: { type: Array, required: true },
    source: { type: String, required: true},
},{collection: 'Islands'});

//const islandSchema = mongoose.Schema({name:{ type: String}});

const Island = mongoose.model('Islands', islandSchema);

module.exports = Island;