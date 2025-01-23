const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    pricePerNight: {
        type: Number,
        required: true,
        min: 0,
    },
    maxOccupancy: {
        type: Number,
        required: true,
        min: 1,
    },
});

module.exports = mongoose.model('Room', roomSchema);