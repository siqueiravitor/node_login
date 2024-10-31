const authService = require('../services/authService');
const responseHandler = require('../utils/responseHandler');
const CustomError = require('../utils/CustomError');

class AuthController {
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await authService.register(name, email, password);
            responseHandler.sendSuccess(res, 'User registered successfully', { userId: user.insertId }, 201);
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
            if(error instanceof CustomError){
                responseHandler.sendError(res, error.message, error.statusCode);
            } else {
                responseHandler.sendError(res, 'An unexpected error occurred', 500);
            }
        }
    }

    async getProfile(req, res){
        try {
            const id_user = req.userId
            const { user } = await authService.profile(id_user);
            responseHandler.sendSuccess(res, 'User profile returned successfully', { user });
        } catch (error) {
            if (error instanceof CustomError) {
                responseHandler.sendError(res, error.message, error.statusCode);
            } else {
                responseHandler.sendError(res, 'An unexpected error occurred', 500);
            }
        }
    }
}

module.exports = new AuthController();
