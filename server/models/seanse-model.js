const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Seanse = new Schema(
    {
        seanses:[{
            hours: {type: String, required:true},
            day: {type: String, required: true},
            seats: [{type: Boolean, default: false}],
            room:{type:String, required:true},
            movie:{type:mongoose.Schema.Types.ObjectID, ref:"Movie"}
        }]

    },
    { timestamps: true },
)

module.exports = mongoose.model('seanses', Seanse);