const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const WaveSchema = new Schema(
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

const Wave = mongoose.model('Wave', WaveSchema, 'Wave');
module.exports = Wave;