const sendSuccess = (res, message, data = {}, statusCode = 200) => {
    res.status(statusCode).json({ message, data });
};

const sendError = (res, message, statusCode = 400) => {
    res.status(statusCode).json({ error: message });
};

module.exports = { sendSuccess, sendError };