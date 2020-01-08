const express = require('express');
const verify = require('../middleware/verifyToken');
const MovieCtrl = require('../controllers/movie-ctrl');
const router = express.Router();

router.post('/movie', MovieCtrl.createMovie);
router.post('/movie/create', MovieCtrl.createMovies);
router.put('/movie/:id', MovieCtrl.updateMovie);
router.delete('/movie/:id', MovieCtrl.deleteMovie);
router.get('/movie/:id', MovieCtrl.getMovieById);
router.get('/movies', MovieCtrl.getMovies);


// Login with token verify middleware
// router.get('/seanse/:id', verify, MovieCtrl.getSeanse);


module.exports = router;
