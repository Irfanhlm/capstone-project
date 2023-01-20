const express = require('express');
const router = express();
const {
    talentsCreateRest,
    talentsAllRest,
    talentsGetByIdRest,
    talentsUpdateRest,
    talentsDeleteRest
} = require('./controller');

router.post("/talents", talentsCreateRest); // create talents

router.get("/talents", talentsAllRest); // get all talents

router.get("/talents/:id", talentsGetByIdRest); // get one talents by id

router.put("/talents/:id", talentsUpdateRest); // update talents

router.delete("/talents/:id", talentsDeleteRest); // delete talents

module.exports = router;