// the two code in the line 2and 3 are the same ...//Destructuring assignment we use it for object ... and it is simple to understand 
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if (err) {
        return console.log('Unable to connect to mongoDb server');
    } 
    console.log('Connected to the server');
    
    // // findOneAndUpdate
    //  db.collection('todos').findOneAndUpdate({
    //      _id: new ObjectID('597e0f5e036f1dd710d07e07')
    //  }, { // search in the google : mongodb update operator
    //      $set: {
    //          completed: true
    //      }
    //  }, {// see the ling i write :http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
    //      returnOriginal: false
    //  }).then(function(result){
    //      console.log(result);
    //  });
    
    // challenge done
    db.collection('todos').findOneAndUpdate({
        _id: new ObjectID('597e202d036f1dd710d0803c')
    }, {
        $set: {
            name: 'daniel'
        },
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then(function(result){
        console.log(result);
    })

    // db.close();
})