const router = require('express').Router();

const productsController = require('../contollers/products.controller');

router.get('/', productsController.getAllProducts);

module.exports = router;