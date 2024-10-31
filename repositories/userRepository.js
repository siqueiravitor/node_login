const userModel = require('../models/userModel');

class UserRepository {
    async registerUser(name, email, password) {
        return await userModel.createUser(name, email, password);
    }

    async getUserByEmail(email) {
        return await userModel.findUserByEmail(email);
    }

    async getUserById(id) {
        return await userModel.findUserById(id);
    }
}

module.exports = new UserRepository();
