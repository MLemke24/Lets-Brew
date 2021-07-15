const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ChemexSchema = new Schema(
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

const CHEMEX = mongoose.model('Chemex', ChemexSchema, 'Chemex');
module.exports = CHEMEX;