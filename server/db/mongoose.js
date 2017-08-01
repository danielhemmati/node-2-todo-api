var mongoose = require('mongoose');

// there is the history why they do this ... word
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
}); 

module.exports = {
    mongoose // as you know you can write it in different way but shorter the better 
}