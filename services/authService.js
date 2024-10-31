const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const CustomError = require('../utils/CustomError');

class AuthService {
    async register(name, email, password) {
        const existingUser = await userRepository.getUserByEmail(email);
        if(existingUser) throw new CustomError('Email already in use', 409);

        const hashedPassword = await bcrypt.hash(password, 10);
        return await userRepository.registerUser(name, email, hashedPassword);
    }

    async login(email, password) {
        const user = await userRepository.getUserByEmail(email);
        if (!user) throw new CustomError('Invalid email or password', 404);

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) throw new CustomError('Invalid email or password', 404);
        
        if(user.status == 'inactive') throw new CustomError('User inactive', 403);
        if(user.status == 'blocked') throw new CustomError('User blocked', 403);
        
        delete user.password;
        delete user.status;

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || '123', { expiresIn: '1h' });
        return { user, token };
    }

}

module.exports = new AuthService();
