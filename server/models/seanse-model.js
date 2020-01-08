const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Seanse = new Schema(
    {
        movie:{type: String, required: true},
        day: {type: String, required: true},
        hour: {type: String, required:true},
        seats: [[{type: Boolean, default: false}]],
    },
)

module.exports = mongoose.model('seanses', Seanse);