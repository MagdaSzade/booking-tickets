const Seanse = require('../models/seanse-model');

createSeanse = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a seanse',
        })
    }

    const seanse = new Seanse(body)

    if (!seanse) {
        return res.status(400).json({ success: false, error: err })
    }

    seanse
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: seanse._id,
                message: 'Seanse created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Seanse not created!',
            })
        })
};

updateSeanse = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Seanse.findOne({ _id: req.params.id }, (err, seanse) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Seanse not found!',
            })
        }
        seanse.name = body.name
        seanse.description = body.description
        seanse.releaseDate = body.releaseDate
        seanse.orign = body.orign
        seanse.time = body.time
        seanse.imgSrc = body.imgSrc
        seanse
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: seanse._id,
                    message: 'Seanse updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Seanse not updated!',
                })
            })
    })
};

deleteSeanse = async (req, res) => {
    await Seanse.findOneAndDelete({ _id: req.params.id }, (err, seanse) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!seanse) {
            return res
                .status(404)
                .json({ success: false, error: `Seanse not found` })
        }

        return res.status(200).json({ success: true, data: seanse })
    }).catch(err => console.log(err))
};

getSeanseById = async (req, res) => {
    await Seanse.findOne({ _id: req.params.id }, (err, seanse) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!seanse) {
            return res
                .status(404)
                .json({ success: false, error: `Seanse not found` })
        }
        return res.status(200).json({ success: true, data: seanse })
    }).catch(err => console.log(err))
};

getSeanses = async (req, res) => {
    await Seanse.find({}, (err, seanses) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!seanses.length) {
            return res
                .status(404)
                .json({ success: false, error: `Seanse not found` })
        }
        return res.status(200).json({ success: true, data: seanses })
    }).catch(err => console.log(err))
};

getSeanse = async (req, res) => {
    await Seanse.findOne({ _id: req.params.id }, (err, seanse) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!seanse) {
            return res
                .status(404)
                .json({ success: false, error: `Seanse not found` })
        }
        return res.status(200).json({ success: true, data: seanse })
    }).catch(err => console.log(err))
};


module.exports = {
    createSeanse,
    updateSeanse,
    deleteSeanse,
    getSeanses,
    getSeanseById,
    getSeanse,
};