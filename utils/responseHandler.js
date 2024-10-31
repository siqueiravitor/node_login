const sendSuccess = (res, message, data) => {
    res.status(200).json({ message, data });
};

const sendError = (res, message) => {
    res.status(400).json({ error: message });
};

module.exports = { sendSuccess, sendError };