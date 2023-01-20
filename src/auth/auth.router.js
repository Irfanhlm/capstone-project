const express = require('express');
const authLogin = require('./auth.controller');
const router = express();

router.post("/login", authLogin); // Login auth

module.exports = router;