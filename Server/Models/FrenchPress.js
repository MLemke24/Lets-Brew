const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const FrenchPressSchema = new Schema(
    {
        id: {
            type: Number,
            required: true
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

const FrenchPress = mongoose.model('FrenchPress', FrenchPressSchema, 'FrenchPress');
module.exports = FrenchPress;