const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, deleteUser, updateUser } = require('../controllers/usersController');
const bcrypt = require('bcrypt');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.delete('/user/:id', deleteUser);
router.post('/users', createUser);
router.patch('/user/:id', updateUser);

module.exports = router;
