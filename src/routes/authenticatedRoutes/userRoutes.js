const express = require('express');
const userController = require('../../controllers/userController');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.get('/all', authMiddleware, userController.getAllUsers);
router.get('/profile/:id', authMiddleware, userController.getProfile);
router.patch('/update/:id', authMiddleware, userController.updateUser);
router.delete('/delete/:id', authMiddleware, userController.deleteUser);

module.exports = router;