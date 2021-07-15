const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const SiphonSchema = new Schema(
    {
        id: {
            type: Number,
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

const Siphon = mongoose.model('Siphon', SiphonSchema, 'Siphon');
module.exports = Siphon;