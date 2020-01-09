const Seanse = require('../models/seanse-model');

getSeans = async (req, res) => {
    await Seanse.find({ movie: req.body.movie, day: req.body.day, hour: req.body.hour}, (err, seanses) => {
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

bookPlace = async (req, res) => {
    const body = req.body
    console.log (body);

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    Seanse.findOne({ _id: body.seansId }, (err, seanse) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Seanse not found!',
            })
        }
        let seatsInDatabase = [...seanse.seats];
        let permission = true;
        body.places.forEach((place) => {
            if (!seatsInDatabase[place.charCodeAt(0)-65][place[1]]) {
                seatsInDatabase[place.charCodeAt(0)-65][place[1]] = true;
            } else {
                permission = false;
            }
        });
        if (permission) {
            seanse.seats = seatsInDatabase;
            seanse.markModified('seats');
            seanse.save();
            return res.send("ok");
        } else {
            return res.status(400).json({
                success: false,
                error: 'Somebody just reserved those places',
            })
        }
    })

        
}

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

module.exports = {
    getSeans,
    bookPlace,
    updateSeanse,
};