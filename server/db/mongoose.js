var mongoose = require('mongoose');

// there is the history why they do this ... word
mongoose.Promise = global.Promise;
// mongodb://<dbuser>:<dbpassword>@ds055895.mlab.com:55895/danielapp
var databaseURL = process.env.DATABASEURL;
mongoose.connect( databaseURL ||'mongodb://localhost:27017/TodoApp'); 

module.exports = {
    mongoose // as you know you can write it in different way but shorter the better 
}