const express = require('express');
const roomsRoutes = require('./routes/rooms');
const bookingsRoutes = require('./routes/bookings');
const setupSwagger = require('./swagger/swagger');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();



const app = express();
const PORT = 3000;

app.use(express.json());

setupSwagger(app);

app.use('/auth', authRoutes);
app.use('/rooms', roomsRoutes);
app.use('/bookings', bookingsRoutes);

app.use(errorHandler);


app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
