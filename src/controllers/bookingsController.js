const bookings = require('../data/bookings');
const rooms = require('../data/rooms');

exports.getBookings = (req, res) => {
    res.status(200).json(bookings);
};

exports.createBooking = (req, res) => {
    const { roomId, customerName, startDate, endDate } = req.body;

    const room = rooms.find(r => r.id === roomId);
    if (!room) {
        return res.status(404).json({ error: "Room not found" });
    }

    if (!customerName || !startDate || !endDate) {
        return res.status(400).json({ error: "All fields are required: roomId, customerName, startDate, endDate" });
    }

    const newBooking = {
        id: bookings.length + 1,
        roomId,
        customerName,
        startDate,
        endDate,
        totalPrice: room.pricePerNight * ((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)) // Calculate total price
    };

    bookings.push(newBooking);
    res.status(201).json(newBooking);
};

exports.updateBooking = (req, res) => {
    const { id } = req.params;
    const { roomId, customerName, startDate, endDate } = req.body;

    const booking = bookings.find(b => b.id === parseInt(id));
    if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
    }

    if (roomId) booking.roomId = roomId;
    if (customerName) booking.customerName = customerName;
    if (startDate) booking.startDate = startDate;
    if (endDate) booking.endDate = endDate;

    const room = rooms.find(r => r.id === booking.roomId);
    booking.totalPrice = room.pricePerNight * ((new Date(booking.endDate) - new Date(booking.startDate)) / (1000 * 60 * 60 * 24));

    res.status(200).json(booking);
};

exports.deleteBooking = (req, res) => {
    const { id } = req.params;
    const bookingIndex = bookings.findIndex(b => b.id === parseInt(id));

    if (bookingIndex === -1) {
        return res.status(404).json({ error: "Booking not found" });
    }

    bookings.splice(bookingIndex, 1);
    res.status(204).send();
};