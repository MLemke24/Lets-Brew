const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BeeHouseSchema = new Schema(
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

const BeeHouse = mongoose.model('BeeHouse', BeeHouseSchema, 'BeeHouse');
module.exports = BeeHouse;