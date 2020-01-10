const express = require('express');
const SeanseCtrl = require('../controllers/seanse-ctrl');
const router = express.Router();
const verify = require('../middleware/verifyToken');

router.post('/seanse/getOne', verify, SeanseCtrl.getSeans);
router.put('/seanse/bookPlace', verify, SeanseCtrl.bookPlace);
router.put('/seanse/:id', SeanseCtrl.updateSeanse);

module.exports = router;
