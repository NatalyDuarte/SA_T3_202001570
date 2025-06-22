const express = require('express');
const router = express.Router();
const ciController = require('../controllers/ci.controller.js');

router.get('/', ciController.getAllCIs);
router.get('/:id', ciController.getCIById);
router.post('/', ciController.createCI);
router.put('/:id', ciController.updateCI);
router.delete('/:id', ciController.deleteCI);

module.exports = router;