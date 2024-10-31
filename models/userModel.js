const { createConnection } = require('../config/dbMySql');

class UserModel {
    async createUser(name, email, password) {
        const connection = await createConnection();
        const [result] = await connection.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        await connection.end();
        return result;
    }

    async findUserByEmail(email) {
        const connection = await createConnection();
        const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
        await connection.end();
        return rows.length > 0 ? rows[0] : null;
    }
}

module.exports = new UserModel();
