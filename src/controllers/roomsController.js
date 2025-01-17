const rooms = require('../data/rooms');

exports.getRooms = (req, res) => {
    res.status(200).json(rooms);
};

exports.createRoom = (req, res) => {
    const { type, pricePerNight, maxOccupancy } = req.body;

    if (!type || !pricePerNight || !maxOccupancy) {
        return res.status(400).json({ error: "All fields are required: type, pricePerNight, maxOccupancy" });
    }

    const newRoom = {
        id: rooms.length + 1,
        type,
        pricePerNight,
        maxOccupancy,
    };

    rooms.push(newRoom);
    res.status(201).json(newRoom);
};

exports.updateRoom = (req, res) => {
    const { id } = req.params;
    const { type, pricePerNight, maxOccupancy } = req.body;

    const room = rooms.find(r => r.id === parseInt(id));
    if (!room) {
        return res.status(404).json({ error: "Room not found" });
    }

    if (type) room.type = type;
    if (pricePerNight) room.pricePerNight = pricePerNight;
    if (maxOccupancy) room.maxOccupancy = maxOccupancy;

    res.status(200).json(room);
};

exports.deleteRoom = (req, res) => {
    const { id } = req.params;
    const roomIndex = rooms.findIndex(r => r.id === parseInt(id));

    if (roomIndex === -1) {
        return res.status(404).json({ error: "Room not found" });
    }

    rooms.splice(roomIndex, 1);
    res.status(204).send();
};
