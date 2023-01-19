const express = require('express');
const router = express();
// import { verifyToken } from "../middleware/auth.js";
const {
    userCreateRest,
    userGetbyIdRest,
    usersRest,
    userDeleteRest,
    userUpdateRest
} = require('./controller');

router.post("/users", userCreateRest); // Create Users

router.get("/users", usersRest); // Get All Users 

router.get("/users/:id", userGetbyIdRest); // Get Users by ID

router.put("/users/:id", userUpdateRest); // Update Users by ID

router.delete("/users/:id", userDeleteRest); // Delete Users by ID

// router.get("/users", verifyToken, userGetByIDRest);

module.exports = router;