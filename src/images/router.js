const express = require('express');
const router = express();
const {
    imagesCreateRest,
    imagesAllRest,
    imagesGetByIdRest,
    imagesUpdateRest,
    imagesDeleteRest
} = require('./controller');

router.post('/images', imagesCreateRest); // create images

router.get('/images', imagesAllRest); // get all images

router.get('/images/:id', imagesGetByIdRest); // get one images by id

router.put('/images/:id', imagesUpdateRest); // update images

router.delete('/images/:id', imagesDeleteRest); // delete images

module.exports = router;