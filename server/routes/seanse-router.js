const express = require('express');
const SeanseCtrl = require('../controllers/seanse-ctrl');
const router = express.Router();

router.post('/seanse/getOne', SeanseCtrl.getSeans);
router.put('/seanse/bookPlace', SeanseCtrl.bookPlace);
router.put('/seanse/:id', SeanseCtrl.updateSeanse);

module.exports = router;