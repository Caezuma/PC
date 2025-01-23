const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/roomsController');
const { verifyToken } = require('../middlewares/authMiddleware');
const { validateRoomFields } = require('../middlewares/validation');


router.get('/', verifyToken, roomsController.getRooms);
router.post('/', verifyToken, validateRoomFields, roomsController.createRoom);
router.put('/:id', verifyToken, validateRoomFields, roomsController.updateRoom);
router.delete('/:id', verifyToken, roomsController.deleteRoom);

module.exports = router;
