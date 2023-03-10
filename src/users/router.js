const express = require('express');
const router = express();
const verifyToken = require("../middleware/auth");
const {
    userCreateRest,
    userGetbyIdRest,
    usersRest,
    userDeleteRest,
    userUpdateRest
} = require('./controller');

router.post("/users", userCreateRest); // Create Users

router.get("/users/:id", verifyToken, userGetbyIdRest); // Get Users by ID

router.get("/users", verifyToken, usersRest); // Get All Users 

router.put("/users/:id", verifyToken, userUpdateRest); // Update Users by ID

router.delete("/users/:id", verifyToken, userDeleteRest); // Delete Users by ID

module.exports = router;