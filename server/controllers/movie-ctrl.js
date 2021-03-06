const Movie = require('../models/movie-model');
const Seans = require('../models/seanse-model');
const createCompleteMovieList = require('../seed/movie-seeder');


createMovies = (req, res) => {
    const movies = createCompleteMovieList();
    movies.forEach(async (movie) =>{
        let movieToSave = new Movie(movie);  
        movieToSave = await movieToSave.save();
        movieToSave.seanses.forEach((seans) => {
            console.log()
            seans.hours.forEach((hour) => {
                const newSeans = {
                    movie: movieToSave.name,
                    day: seans.day,
                    hour: hour,
                    seats: [
                        [false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false],
                        [false, false, false, false, false, false, false, false, false, false]],
                }
                seansToSave = new Seans(newSeans);
                seansToSave.save();
            })
        })
    });
    res.send("ok");
}

createMovie = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
};

updateMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        movie.name = body.name
        movie.description = body.description
        movie.releaseDate = body.releaseDate
        movie.orign = body.orign
        movie.time = body.time
        movie.imgSrc = body.imgSrc
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })
    })
};

deleteMovie = async (req, res) => {
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
};

getMovieById = async (req, res) => {
    await Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
};

getMovies = async (req, res) => {
    await Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
};




module.exports = {
    createMovies,
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById
};