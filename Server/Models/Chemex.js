const { Schema, model, Types } = require('mongoose');

const ChemexSchema = new Schema(
    {
        id: {
            type: INTEGER,
        },
        cupSize: {
            type: INTEGER,
        },
        grindSize: {
            type: STRING,
        },
        coffeeAmount: {
            type: INTEGER
        },
        water: {
            type: INTEGER
        }
    }
)

const CHEMEX = mongoose.model('Chemex', ChemexSchema, 'Chemex');
module.exports = CHEMEX;