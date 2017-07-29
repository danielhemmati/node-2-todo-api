// the two code in the line 2and 3 are the same ...//Destructuring assignment we use it for object ... and it is simple to understand 
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if (err) {
        return console.log('Unable to connect to mongoDb server');
    } 
    console.log('Connected to the server');

    // insted of having the cursor we have the array of documents and toArray return the promise 
    // if you just put the id and the number is not going to work you have to use objectId bercause it is object
//    db.collection('todos').find({
//        // this line is going to work
//        _id: new ObjectID('597cfba30e109a35ee414c5b')
//     }).toArray().then(function(docs){
//        console.log('todos')
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, function(err){
//        console.log('Unable to fetch todos', err);
//    })

//      db.collection('todos').find().count().then(function(count){
//        console.log(`todos count: ${count}`); 
//    }, function(err){
//        console.log('Unable to fetch todos', err);
//    })

    db.collection('Users').find({name: 'daniel'}).toArray().then(function(docs){
        console.log('Users')
        console.log(JSON.stringify(docs, undefined, 2));
    }, function(err){   
        console.log('unable to fetch data', err);
    })
    
    // db.close();
})