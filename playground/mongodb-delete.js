// the two code in the line 2and 3 are the same ...//Destructuring assignment we use it for object ... and it is simple to understand 
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if (err) {
        return console.log('Unable to connect to mongoDb server');
    } 
    console.log('Connected to the server');

    // deleteMany and we use promis for this too
    // db.collection("Users").deleteMany({name: 'daniel'}).then(function(result){
    //     console.log(result);
    // })

    // deleteOne the differnece is (form the above method) is that it just find one of the matches and just delete that 
        // db.collection('todos').deleteOne({text: 'eat lunch'}).then(function(result){
        //     console.log(result);
        // })

    // findOneAndDelete ... this one target the first on that see the match and it will print what he deleted 
    // Users is the challenhe i done . successfully
            db.collection('Users').findOneAndDelete({_id: new ObjectID("597d064ceba6edcd447e0db8")}).then(function(result){
                console.log(result);
            })
    // db.close();
})