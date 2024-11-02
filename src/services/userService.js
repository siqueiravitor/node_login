const userRepository = require("../repositories/userRepository");
const CustomError = require("../utils/CustomError");

class UserService {
    async getAll() {
        const users = await userRepository.getAllUsers();
        if (!users) throw new CustomError('No user found', 404);

        return { users };
    }
    async profile(id_user){
        const user = await userRepository.getUserById(id_user);
        if (!user) throw new CustomError('User not found', 404);

        return { user };
    }
    async update(id_user, data){
        const { name, email, password, status } = data;

        const user = await userRepository.getUserById(id_user);
        if (!user) throw new CustomError('User not found', 404);

        if(email && email == user.dataValues.email) throw new CustomError('Email already in use', 409);
        
        let hashedPassword = undefined;
        if(password){
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const updatedUser = await userRepository.updateUser(id_user, {name, email, password: hashedPassword, status});

        return updatedUser;
    }
    async delete(id_user){
        const user = await userRepository.getUserById(id_user);
        if (!user) throw new CustomError('User not found', 404);

        const deletedUser = await userRepository.deleteUser(id_user);

        return deletedUser;         
    }
}
module.exports = new UserService();