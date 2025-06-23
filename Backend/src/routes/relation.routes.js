const express = require('express');
const router = express.Router();
const relationController = require('../controllers/relation.controller.js');

router.post('/', relationController.createRelation);

module.exports = router;