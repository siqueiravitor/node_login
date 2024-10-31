const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '123');
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).send('Invalid token.');
    }
};

module.exports = authMiddleware;
