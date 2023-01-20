const express = require('express');
const router = express();
const {
    paymentsCreateRest,
    paymentsAllRest,
    paymentsGetByIdRest,
    paymentsUpdateRest,
    paymentsDeleteRest
} = require('./controller');

router.post('/payments', paymentsCreateRest); // create payment

router.get('/payments', paymentsAllRest); // get all payments

router.get('/payments/:id', paymentsGetByIdRest); // get one payment by id

router.put('/payments/:id', paymentsUpdateRest); // update payment

router.delete('/payments/:id', paymentsDeleteRest); // delete payment

module.exports = router;