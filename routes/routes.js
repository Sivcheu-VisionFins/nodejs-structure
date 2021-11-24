const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllers.controller');

router.get('/', controller.helloAPI);

module.exports = router;
