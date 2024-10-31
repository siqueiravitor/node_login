const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

class AuthService {
    async register(name, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await userRepository.registerUser(name, email, hashedPassword);
    }

    async login(email, password) {
        const user = await userRepository.getUserByEmail(email);
        if (!user) throw new Error('Invalid email or password');

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) throw new Error('Invalid email or password');

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'your_secret_key', { expiresIn: '1h' });
        return { user, token };
    }
}

module.exports = new AuthService();
