const express = require('express');
const SeanseCtrl = require('../controllers/seanse-ctrl');
const router = express.Router();

router.post('/seanse', SeanseCtrl.createSeanse);
router.put('/seanse/:id', SeanseCtrl.updateSeanse);
router.delete('/seanse/:id', SeanseCtrl.deleteSeanse);
router.get('/seanse/:id', SeanseCtrl.getSeanseById);
router.get('/seanses', SeanseCtrl.getSeanses);
router.get('/seanse/:id', SeanseCtrl.getSeanse);




module.exports = router;