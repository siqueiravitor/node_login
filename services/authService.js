const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const CustomError = require('../utils/CustomError');

class AuthService {
    async register(name, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await userRepository.registerUser(name, email, hashedPassword);
    }

    async login(email, password) {
        const user = await userRepository.getUserByEmail(email);
        if (!user) throw new CustomError('Invalid email or password', 404);

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) throw new CustomError('Invalid email or password', 404);
        
        if(user.status != 'active') throw new CustomError('User not active', 403);
        
        delete user.password;
        delete user.status;

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'your_secret_key', { expiresIn: '1h' });
        return { user, token };
    }
}

module.exports = new AuthService();
