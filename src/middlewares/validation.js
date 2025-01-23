exports.validateRoomFields = (req, res, next) => {
    const { type, pricePerNight, maxOccupancy } = req.body;

    if (!type || !pricePerNight || !maxOccupancy) {
        return res.status(400).json({ error: "Missing required fields: type, pricePerNight, maxOccupancy" });
    }

    next();
};

exports.validateBookingFields = (req, res, next) => {
    const { roomId, customerName, startDate, endDate } = req.body;

    if (!roomId || !customerName || !startDate || !endDate) {
        return res.status(400).json({ error: "Missing required fields: roomId, customerName, startDate, endDate" });
    }

    next();
};
