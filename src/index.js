require("./configs/env.js");
const express = require('express');
// const { createUser, getUserbyId, deleteUser, getUserbyUsername } = require("./users/model");
const userRoute = require('./users/router');

const categoriesRouter = require('./categories/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const v1 = '/api/v1';

app.use(v1, userRoute);
app.use(v1, categoriesRouter);

app.listen(process.env.API_PORT, () => {
    console.log(`Express API is listening on port ${process.env.API_PORT}`);
});

// createUser('irfan', 'irfan@gmail.com', 'secret', 081201234567);
// createUser('halim', 'halim@gmail.com', 'secret', 081301234567);
// createUser('hidayats', 'hidayats@gmail.com', 'secret', 081401234567);

// console.log(await getUserbyId(3));

// deleteUser(3);

// getUserbyUsername('halim');
