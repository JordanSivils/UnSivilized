const express = require('express');
const router = express.Router();
const  methodOverride = require('method-override')
const upload = require('../middleware/mutler')

const form = require('../controller/formController');
const { requireAuth } = require('../middleware/authMiddle')
router.use(methodOverride('_method'))


router.post('/form', upload.array('images'), form.submit_form);
router.get('/form', requireAuth ,form.get_form);

module.exports = router;

