var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/lets-brew', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './Models/Chemex.js',
    './Models/AeroPress.js',
    './Models/V60.js',
    './Models/FrenchPress.js',
    './Models/Siphon.js',
    './Models/MokaPot.js',
    './Models/Wave.js',
    './Models/BeeHouse.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Chemex', 'AeroPress', 'V60', 'FrenchPress', 'Siphon', 'MokaPot', 'Wave', 'BeeHouse'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});

const data = [
   { 
    model: 'Chemex',
    documents: [
        {
            'id': '1',
            'cupSize': '1',
            'grindSize': 'medium',
            'coffeeAmount': '25',
            'water': '340'
        },
        {
            'id': '2',
            'cupSize': '2',
            'grindSize': 'medium',
            'coffeeAmount': '50',
            'water': '640'
        },
        {
            'id': '3',
            'cupSize': '3',
            'grindSize': 'medium',
            'coffeeAmount': '75',
            'water': '980'
        },
        {
            'id': '4',
            'cupSize': '4',
            'grindSize': 'medium',
            'coffeeAmount': '100',
            'water': '1020'
        },
        {
            'id': '5',
            'cupSize': '5',
            'grindSize': 'medium',
            'coffeeAmount': '125',
            'water': '1360'
        },
        {
            'id': '6',
            'cupSize': '6',
            'grindSize': 'medium',
            'coffeeAmount': '150',
            'water': '1700'
        }
    ]
},
{
    model: 'AeroPress',
    documents: [
        {
        'id': '1',
        'cupSize': '1',
        'grindSize': 'fine',
        'coffeeAmount': '15',
        'water': '240'
        },
        {
            'id': '2',
            'cupSize': '2',
            'grindSize': 'fine',
            'coffeeAmount': '30',
            'water': '480'
        },
        {
            'id': '3',
            'cupSize': '3',
            'grindSize': 'fine',
            'coffeeAmount': '45',
            'water': '720'
        },
        {
            'id': '4',
            'cupSize': '4',
            'grindSize': 'fine',
            'coffeeAmount': '60',
            'water': '960'
        },
        {
            'id': '5',
            'cupSize': '5',
            'grindSize': 'fine',
            'coffeeAmount': '75',
            'water': '1200'
        },
        {
            'id': '6',
            'cupSize': '6',
            'grindSize': 'fine',
            'coffeeAmount': '90',
            'water': '1440'
        },
       
    ]
},
{
    model: 'V60',
    documents: [
        {
        'id': '1',
        'cupSize': '1',
        'grindSize': 'medium',
        'coffeeAmount': '13',
        'water': '220'
        },
        {
            'id': '2',
            'cupSize': '2',
            'grindSize': 'medium',
            'coffeeAmount': '26',
            'water': '440'
        },
        {
            'id': '3',
            'cupSize': '3',
            'grindSize': 'medium',
            'coffeeAmount': '39',
            'water': '660'
        },
        {
            'id': '4',
            'cupSize': '4',
            'grindSize': 'medium',
            'coffeeAmount': '52',
            'water': '880'
        },
        {
            'id': '5',
            'cupSize': '5',
            'grindSize': 'medium',
            'coffeeAmount': '65',
            'water': '1100'
        },
        {
            'id': '6',
            'cupSize': '6',
            'grindSize': 'medium',
            'coffeeAmount': '78',
            'water': '1320'
        },
       
    ]
},
{
    model: 'FrenchPress',
    documents: [
        {
        'id': '1',
        'cupSize': '1',
        'grindSize': 'coarse',
        'coffeeAmount': '30',
        'water': '350'
        },
        {
            'id': '2',
            'cupSize': '2',
            'grindSize': 'coarse',
            'coffeeAmount': '60',
            'water': '700'
        },
        {
            'id': '3',
            'cupSize': '3',
            'grindSize': 'coarse',
            'coffeeAmount': '90',
            'water': '1050'
        },
        {
            'id': '4',
            'cupSize': '4',
            'grindSize': 'coarse',
            'coffeeAmount': '120',
            'water': '1400'
        },
        {
            'id': '5',
            'cupSize': '5',
            'grindSize': 'coarse',
            'coffeeAmount': '150',
            'water': '1750'
        },
        {
            'id': '6',
            'cupSize': '6',
            'grindSize': 'coarse',
            'coffeeAmount': '180',
            'water': '2100'
        },
    ]
},
{
    model: 'Siphon',
    documents: [
        {
        'id': '1',
        'cupSize': '1',
        'grindSize': 'fine',
        'coffeeAmount': '20',
        'water': '300'
        },
        {
            'id': '2',
            'cupSize': '2',
            'grindSize': 'fine',
            'coffeeAmount': '40',
            'water': '600'
        },
        {
            'id': '3',
            'cupSize': '3',
            'grindSize': 'fine',
            'coffeeAmount': '60',
            'water': '900'
        },
        {
            'id': '4',
            'cupSize': '4',
            'grindSize': 'fine',
            'coffeeAmount': '90',
            'water': '1200'
        },
        {
            'id': '5',
            'cupSize': '5',
            'grindSize': 'fine',
            'coffeeAmount': '120',
            'water': '1500'
        },
        {
            'id': '6',
            'cupSize': '6',
            'grindSize': 'fine',
            'coffeeAmount': '150',
            'water': '1800'
        },
       
    ]
},
{
    model: 'MokaPot',
    documents: [
        {
        'id': '1',
        'cupSize': '1',
        'grindSize': 'fine',
        'coffeeAmount': '18',
        'water': '200'
        },
        {
            'id': '2',
            'cupSize': '2',
            'grindSize': 'fine',
            'coffeeAmount': '36',
            'water': '400'
        },
        {
            'id': '3',
            'cupSize': '3',
            'grindSize': 'fine',
            'coffeeAmount': '54',
            'water': '600'
        },
        {
            'id': '4',
            'cupSize': '4',
            'grindSize': 'fine',
            'coffeeAmount': '72',
            'water': '800'
        },
        {
            'id': '5',
            'cupSize': '5',
            'grindSize': 'fine',
            'coffeeAmount': '90',
            'water': '1000'
        },
        {
            'id': '6',
            'cupSize': '6',
            'grindSize': 'fine',
            'coffeeAmount': '108',
            'water': '1200'
        },
       
    ]
},
{
    model: 'Wave',
    documents: [
        {
        'id': '1',
        'cupSize': '1',
        'grindSize': 'medium',
        'coffeeAmount': '15',
        'water': '250'
        },
        {
            'id': '2',
            'cupSize': '2',
            'grindSize': 'medium',
            'coffeeAmount': '30',
            'water': '500'
        },
        {
            'id': '3',
            'cupSize': '3',
            'grindSize': 'medium',
            'coffeeAmount': '45',
            'water': '750'
        },
        {
            'id': '4',
            'cupSize': '4',
            'grindSize': 'medium',
            'coffeeAmount': '60',
            'water': '1000'
        },
        {
            'id': '5',
            'cupSize': '5',
            'grindSize': 'medium',
            'coffeeAmount': '75',
            'water': '1250'
        },
        {
            'id': '6',
            'cupSize': '6',
            'grindSize': 'medium',
            'coffeeAmount': '90',
            'water': '1500'
        },
       
    ]
},
{
    model: 'BeeHouse',
    documents: [
        {
        'id': '1',
        'cupSize': '1',
        'grindSize': 'medium',
        'coffeeAmount': '15',
        'water': '250'
        },
        {
            'id': '2',
            'cupSize': '2',
            'grindSize': 'medium',
            'coffeeAmount': '30',
            'water': '500'
        },
        {
            'id': '3',
            'cupSize': '3',
            'grindSize': 'medium',
            'coffeeAmount': '45',
            'water': '750'
        },
        {
            'id': '4',
            'cupSize': '4',
            'grindSize': 'medium',
            'coffeeAmount': '60',
            'water': '1000'
        },
        {
            'id': '5',
            'cupSize': '5',
            'grindSize': 'medium',
            'coffeeAmount': '75',
            'water': '1250'
        },
        {
            'id': '6',
            'cupSize': '6',
            'grindSize': 'medium',
            'coffeeAmount': '90',
            'water': '1500'
        },
       
    ]
},
]




// import seeder from 'mongoose-seed';

// const db = 'mongodb://localhost:3001/lets-brew'

// seeder.connect(db, function () {
//     seeder.loadModels([
//         './Chemex.js'
//     ]);
//     seeder.clearModels(['Chemex']);
//     seeder.populateModels(data, function (err, done) {
//         if (err) {
//             return console.log('seed err', err)
//         }
//         if (done) {
//             return console.log('seed done', done)
//         }
//         seeder.disconnect()
//     })
// });