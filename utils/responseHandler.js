const sendSuccess = (res, message, data) => {
    res.status(200).json({ message, data });
};

const sendError = (res, message, statusCode = 400) => {
    console.log(res, message)
    res.status(statusCode).json({ error: message });
};

module.exports = { sendSuccess, sendError };