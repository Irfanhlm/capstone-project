const express = require('express');
const router = express();
const { categoriesCreateRest, categoriesAllRest, categoriesGetByIdRest, categoriesUpdateRest, categoriesDeleteRest, index } = require('./controller.categories');

router.post('/categories', categoriesCreateRest); // create category

// router.get('/categories', categoriesAllRest); // get all categories
router.get('/categories', index); // get all categories

router.get('/categories/:id', categoriesGetByIdRest); // get one category by id

router.put('/categories/:id', categoriesUpdateRest); // update category

router.delete('/categories/:id', categoriesDeleteRest); // delete category

module.exports = router;