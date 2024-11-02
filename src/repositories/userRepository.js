const User = require("../models/userModel");

const userRepository = {
    async createUser(data) {
        return await User.create(data);
    },

    async getAllUsers(){
        return await User.findAll({
            attributes: { exclude: ['password'] }
        });
    },

    async getUserByEmail(email, attributes = null) {
        return await User.findOne({ 
            attributes: attributes || '',
            where: { email },
        });
    },

    async getUserById(id, attributes = null) {
        return await User.findByPk(id, {
            attributes: attributes || { exclude: ['password'] },
        });
    },

    async updateUser(id, data) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');

        return await user.update( data );
    },

    async deleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        
        await user.destroy();
    }
};

module.exports = userRepository;
