const authService = require('../services/authService');
const responseHandler = require('../utils/responseHandler');

class AuthController {
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await authService.register(name, email, password);
            responseHandler.sendSuccess(res, 'User registered successfully', { userId: user.insertId });
        } catch (error) {
            responseHandler.sendError(res, error.message);
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const { user, token } = await authService.login(email, password);
            responseHandler.sendSuccess(res, 'Successfully logged in', { user, token });
        } catch (error) {
            responseHandler.sendError(res, error.message);
        }
    }
}

module.exports = new AuthController();
