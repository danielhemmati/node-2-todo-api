var mongoose = require('mongoose');

// there is the history why they do this ... word
mongoose.Promise = global.Promise;
// mongodb://<dbuser>:<dbpassword>@ds055895.mlab.com:55895/danielapp
var databaseuri = process.env.DATABASEURI;
mongoose.connect( databaseuri ||'mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
}); 

module.exports = {
    mongoose // as you know you can write it in different way but shorter the better 
}