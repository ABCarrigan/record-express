const mongoose = require('mongoose');

const recordsSchema = new mongoose.Schema({
    artist: String,
    albumtitle: String,
    coverart: String,
    year: Number,
    genre: String
});

const Records = mongoose.model('Record', recordsSchema);

module.exports = Records;