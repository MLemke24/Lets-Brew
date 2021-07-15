const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const AeroPressSchema = new Schema(
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

const AeroPress = mongoose.model('AeroPress', AeroPressSchema, 'AeroPress');
module.exports = AeroPress;