var express    = require('express');
var bodyParser = require('body-parser')


// var mongoose = require('./db/mongoose.js').mongoose;
var {mongoose} = require('./db/mongoose.js')// as you can see this two line are the same .. you export the variable not the mongoose 
// you should extract the mongoose too and you can do it in two way that i write in the above 
// and this {} you can wirte defferently as i say in the line 2 
var {Todo}     = require('./models/todo.js');
var {User}     = require('./models/user.js');

var app = express();
// this is middleware that we want express to use to server understand the json data and can convert it to the object 
app.use(bodyParser.json());

app.post('/todos', function(req, res){
    // this is where bodyParesr get sotored
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(function(docs){
        res.send(docs);
    }, function(e){
        res.status(400).send(e);
    })

});

app.listen(3000, function(){
    console.log('started on port 3000');
})