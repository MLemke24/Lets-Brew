var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/lets-brew', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './Models/Chemex.js',
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Chemex'], function() {
 
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
}
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