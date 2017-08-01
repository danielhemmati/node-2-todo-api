// and of course you can just load the mongoose library in here as well
var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true, // if you someone create the data without specifing the text .. it can't make any data . it should make text 
        minlength: 1,
        trim: true // if you pass space as the data it going to fail this one is my favorite .awesome 
    },
    completed: {
        type: Boolean,
        default: false// ?
    },
    completedAt: {
        type: Number,
        default: null // ?
    }
})

module.exports = {
    Todo
}