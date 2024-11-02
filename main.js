const express = require('express');
const createConnection = require('./src/config/dbSqLite');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/authenticatedRoutes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT;
createConnection.sync()
    .then(() => {
        console.log('Database synchronized');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Database synchronization error:', error);
    });
