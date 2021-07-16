const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const V60Schema = new Schema(
    {
        id: {
            type: Number,
        },
        name: {
            type: String
        },
        cupSize: {
            type: Number,
        },
        grindSize: {
            type: String,
        },
        coffeeAmount: {
            type: Number,
        },
        water: {
            type: Number
        }
    }
)

const V60 = mongoose.model('V60', V60Schema, 'V60');
module.exports = V60;