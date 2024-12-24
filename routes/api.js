const express = require('express');
const router = express.Router();

const { createUser, getUser, listUser, updateUser} = require('../controller/UserController');

router.get('/users', listUser);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);

module.exports = router;