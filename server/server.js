var express    = require('express');
var bodyParser = require('body-parser')

var {ObjectID} = require('mongodb');
// var mongoose = require('./db/mongoose.js').mongoose;
var {mongoose} = require('./db/mongoose.js')// as you can see this two line are the same .. you export the variable not the mongoose 
// you should extract the mongoose too and you can do it in two way that i write in the above 
// and this {} you can wirte defferently as i say in the line 2 
var {Todo}     = require('./models/todo.js');
var {User}     = require('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;
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

app.get('/todos', function(req, res){
    Todo.find().then(function(todos){
        res.send({todos})// of course we can 
    }, function(e){ // e is error (it's promise bro you can guess it too)
        res.status(400).send(e);
    })
})

app.get('/todos/:id', function(req, res){
    var id = req.params.id;

    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then(function(todo){
        if (!todo){
            return res.status(404).send();
        }
        // if we do this we can later on add more thing to it 
        // and it is equal to {todo: todo, error: thorw new Error('here is the error dude)} 
        res.send({todo})

    }).catch(function(e){
            res.status(404).send();
        });

});

app.listen(port, function(){
    console.log(`started up at port ${port}`);
})

module.exports = {
    app
}