const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/login/advertiser');
router.post('/register/advertiser');

module.exports = router;
