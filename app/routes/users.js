const express = require('express');
const router = express.Router();
const apiFunction = require('../controllers/api');


router.post('/cart', apiFunction.addPackage);
router.get('/cart/:_id', apiFunction.getPackage);
router.put('/cart/:_id', apiFunction.updatePackage);
router.delete('/cart/:_id', apiFunction.removePackage);

module.exports = router;
