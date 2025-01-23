const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsController');
const { verifyToken } = require('../middlewares/authMiddleware');
const { validateBookingFields } = require('../middlewares/validation');


router.get('/', verifyToken, bookingsController.getBookings);
router.post('/', verifyToken,validateBookingFields, bookingsController.createBooking);
router.put('/:id', verifyToken, validateBookingFields, bookingsController.updateBooking);
router.delete('/:id', verifyToken, bookingsController.deleteBooking);

module.exports = router;
