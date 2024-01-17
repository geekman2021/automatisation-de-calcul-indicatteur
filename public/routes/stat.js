const express = require('express');
const router = express.Router();
const statControl = require('../js/stat_control');
const auth = require('../../middleware/auth');


router.get('/stat',auth, statControl.vue);
router.post('/stat',auth,statControl.arr );

module.exports = router;