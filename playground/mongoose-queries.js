const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo}     = require('./../server/models/todo.js');
const {User}     = require('./../server/models/user.js');


//598cb583c15c8f118471fc53
// var id = '598cb583c15c8f118471fc5311';

// if (!ObjectID.isValid(id)){
//     console.log('id is not valid');
// }

// Todo.find({ // this is good part of the mongoose it doesn't need to write the new ObjectId here ... he do it by it self
//     _id: id
// }).then(function(todos){ // 
//     console.log('todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then(function(todo){ // watch we use the todo ... we don't want to return the all todos array 
//     console.log('todo', todo)
// })

// Todo.findById(id).then(function(todo){
//     if (!todo){
//         return console.log('id not found');
//     }
//     console.log('todo bu id', todo);
// }).catch(function(e){
//     console.log(e);
// })

var id = '59805a1db0392536dcd99bf5';

User.findById(id).then(function(user){
    if (!user){
        return console.log('no user found with this id');
    }

    console.log(JSON.stringify(user, undefined, 2));
}).catch(function(e){
    console.log('user not found');
})