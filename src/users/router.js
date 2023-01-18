const Router = require('express');
// import { verifyToken } from "../middleware/auth.js";
const { userCreateAPI, userGetbyIdAPI, usersAPI } = require('./controller');

const userRoute = Router();

userRoute.post("/users", userCreateAPI);
userRoute.get("/users", usersAPI);
userRoute.get("/users", userGetbyIdAPI);
// router.get("/users", verifyToken, userGetByIDRest);

module.exports = userRoute;