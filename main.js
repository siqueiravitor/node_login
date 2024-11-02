const express = require('express');
const createConnection = require('./src/config/dbSqLite');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/authenticatedRoutes/userRoutes');
require('dotenv').config();

const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

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
