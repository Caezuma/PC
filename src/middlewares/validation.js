exports.validateRoomFields = (req, res, next) => {
    const { type, pricePerNight, maxOccupancy } = req.body;

    if (!type || !pricePerNight || !maxOccupancy) {
        return res.status(400).json({ error: "Missing required fields: type, pricePerNight, maxOccupancy" });
    }

    next();
};
