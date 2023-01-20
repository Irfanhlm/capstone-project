require("./configs/env.js");
const express = require('express');
const authRoute = require('./auth/auth.router');
const usersRoute = require('./users/router');
const categoriesRoute = require('./categories/router');
const eventsRoute = require('./events/router');
const ordersRoute = require('./orders/router');
const talentsRoute = require('./talents/router');
// const imagesRoute = require('./images/router');
// const paymentsRoute = require('./payments/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const v1 = '/api/v1';

app.use(v1, authRoute);
app.use(v1, usersRoute);
app.use(v1, categoriesRoute);
app.use(v1, eventsRoute);
app.use(v1, ordersRoute);
app.use(v1, talentsRoute);
// app.use(v1, imagesRoute);
// app.use(v1, paymentsRoute);

app.listen(process.env.API_PORT, () => {
    console.log(`Express API is listening on port ${process.env.API_PORT}`);
});

