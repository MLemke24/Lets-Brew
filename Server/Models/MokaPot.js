const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const MokaPotSchema = new Schema(
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

const MokaPot = mongoose.model('MokaPot', MokaPotSchema, 'MokaPot');
module.exports = MokaPot;