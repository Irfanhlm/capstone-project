require("./configs/env.js");
const express = require('express');
const usersRoute = require('./users/router');
const categoriesRoute = require('./categories/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const v1 = '/api/v1';

app.use(v1, usersRoute);
app.use(v1, categoriesRoute);

app.listen(process.env.API_PORT, () => {
    console.log(`Express API is listening on port ${process.env.API_PORT}`);
});

