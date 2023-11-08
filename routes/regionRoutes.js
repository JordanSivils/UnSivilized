const express = require('express');
const router = express.Router();
const regions = require('../controller/regionController');


router.get('/northeast', regions.get_northeast);
router.get('/southwest', regions.get_southwest);
router.get('/western', regions.get_west);
router.get('/midwest', regions.get_midwest);
router.get('/southeast', regions.get_southeast);
router.get('/international', regions.get_international);

module.exports = router;