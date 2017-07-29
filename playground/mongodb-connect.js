// the two code in the line 2and 3 are the same ...//Destructuring assignment we use it for object ... and it is simple to understand 
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if (err) {
        return console.log('Unable to connect to mongoDb server');
    } 
    console.log('Connected to the server');

    // db.collection('todo').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, function(err, result){
    //     if (err) {
    //         return console.log('Uanble to insert todo', err)
    //     }
    //     // .ops is the data we put in the insertOne (show the data , simple)
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

        // db.collection('Users').insertOne({
        //     name: 'daniel',
        //     age: 19, 
        //     location: 'tehran'
        // }, function(err, result){
        //     if (err) {
        //         return console.log('Unable to insert Users', err)
        //     }
        //     // the Timsstamp get the time that the id was creted ... that's very goood to know 
        //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp())); 
        // })
        
    // this method below close the connection to mongodb server 
    db.close();
})