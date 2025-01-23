const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (v) {
                return v > this.startDate;
            },
            message: 'End date must be after start date!',
        },
    },
    totalPrice: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Booking', bookingSchema);