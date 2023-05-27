const express = require('express');
const router = express.Router();
const { getroles, getRoleById, createRole, updateRole, deleteRole } = require('../controllers/roleController');

router.get('/roles', getroles);
router.get('/roles/:id', getRoleById);
router.post('/roles', createRole);
router.patch('/roles/:id', updateRole);
router.delete('/roles/:id', deleteRole);

module.exports = router;
