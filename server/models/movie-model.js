const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name: { type: String, required: true },
        description: {type: String, required: true},
        releaseDate: {type: Number, required: true  },
        orign: { type: String, required: true },
        time: {type: String, require: true },
        imgSrc:{type:String, required: true},
        seanses:[{
            hours: {type: String, required:true},
            day: {type: String, required: true},
            seats: [{type: Boolean, default: false}],
            room:{type:String, required:true}
        }]
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie);