const responseHandler = require('../utils/responseHandler');
const CustomError = require("../utils/CustomError");
const userService = require("../services/userService");

class UserController {
    async getProfile(req, res){
        try {
            const id_user = req.params.id
            const { user } = await userService.profile(id_user);
            responseHandler.sendSuccess(res, 'User profile returned successfully', { user });
        } catch (error) {
            if (error instanceof CustomError) {
                responseHandler.sendError(res, error.message, error.statusCode);
            } else {
                responseHandler.sendError(res, 'An unexpected error occurred', 500);
            }
        }
    }

    async getAllUsers(req, res){
        try {
            const { users } = await userService.getAll();
            responseHandler.sendSuccess(res, 'Users returned successfully', { users });            
        } catch (error) {
            if (error instanceof CustomError) {
                responseHandler.sendError(res, error.message, error.statusCode);
            } else {
                responseHandler.sendError(res, 'An unexpected error occurred', 500);
            }
        }
    }

    async updateUser(req, res){
        try {
            const id_user = req.params.id;
            const data = req.body
            await userService.update(id_user, data);

            const { user } = await userService.profile(id_user);

            responseHandler.sendSuccess(res, 'Users returned successfully', { user });            
        } catch (error) {
            if (error instanceof CustomError) {
                responseHandler.sendError(res, error.message, error.statusCode);
            } else {
                responseHandler.sendError(res, 'An unexpected error occurred', 500);
            }
        }
    }
    
    async deleteUser(req, res){
        try {
            const id_user = req.params.id;
            const deletedUser = await userService.delete(id_user);

            responseHandler.sendSuccess(res, 'User deleted successfully', deletedUser);
        } catch (error) {
            if (error instanceof CustomError) {
                responseHandler.sendError(res, error.message, error.statusCode);
            } else {
                responseHandler.sendError(res, 'An unexpected error occurred', 500);
            }
        }
    }
}

module.exports = new UserController();
