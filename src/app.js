const express = require('express');
const roomsRoutes = require('./routes/rooms');
const setupSwagger = require('./swagger/swagger');

const app = express();
const PORT = 3000;

app.use(express.json());

setupSwagger(app);

app.use('/rooms', roomsRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
