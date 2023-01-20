const express = require('express');
const router = express();
const {
    ordersCreateRest,
    ordersAllRest,
    ordersGetByIdRest
} = require('./controller');

router.post("/orders", ordersCreateRest); // create orders

router.get("/orders", ordersAllRest); // get all orders

router.get("/orders/:id", ordersGetByIdRest); // get one orders by id

module.exports = router;