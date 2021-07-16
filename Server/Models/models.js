const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const brewerSchema = new Schema(
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
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
        },
        instructions: {
            type: String
        }
    }
)

const Wave = mongoose.model('Wave', brewerSchema);
const V60 = mongoose.model('V60', brewerSchema);
const Siphon = mongoose.model('Siphon', brewerSchema);
const MokaPot = mongoose.model('MokaPot', brewerSchema);
const Chemex = mongoose.model('Chemex', brewerSchema);
const BeeHouse = mongoose.model('BeeHouse', brewerSchema);
const AeroPress = mongoose.model('AeroPress', brewerSchema);
const FrenchPress = mongoose.model('FrenchPress', brewerSchema);

module.exports = { 
    Wave,
    V60,
    Siphon,
    MokaPot,
    Chemex,
    BeeHouse,
    AeroPress,
    FrenchPress
}