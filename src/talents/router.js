const express = require('express');
const router = express();
const {
    eventsCreateRest,
    eventsAllRest,
    eventsGetByIdRest,
    eventsUpdateRest,
    eventsDeleteRest
} = require('./controller');

router.post("/events", eventsCreateRest); // create events

router.get("/events", eventsAllRest); // get all events

router.get("/events/:id", eventsGetByIdRest); // get one events by id

router.put("/events/:id", eventsUpdateRest); // update events

router.delete("/events/:id", eventsDeleteRest); // delete events

module.exports = router;