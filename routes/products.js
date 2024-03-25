const express = require('express');
const router = express.Router();
const db = require('../db/index');

const productController = require('../controllers/productControllers')

router.get('/', productController.index)
router.get('/banda/:id', productController.detalleBanda); 





module.exports = router;