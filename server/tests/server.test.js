const expect  = require('expect');
const request = require('supertest');

const {app}  = require('./../server.js');// i like to write extenstion 
const {Todo} = require('./../models/todo.js');

// there is a problem that if you run the test , you have something in your database so the line that says toB(0)
// will fail so beacause of that , before we run the test case we should wipe the database (and really is going to delete //all of the db)

//now we are going to insert some datas for GET route 
const todos = [{
    text:'first test todos'
},{
    text: 'second test todos'
}];

beforeEach(function(done){
    Todo.remove({}).then(function(){
        return Todo.insertMany(todos);
    }).then(function(){
        done(); 
    });
});

describe('POST /todos', function(){
    it('should create new todo', function(done){ // it's asynchronous so it shlould take done argument
        var text = 'test todo text';

        request(app)
          .post('/todos')
          .send({text})// and supertest make JSON for us .thnx .. and it is ES6 syntax
          .expect(200)
          .expect(function(res){ //res come from app (respond)
            expect(res.body.text).toBe(text);
          })
          .end(function(err, res){
            if (err){
                return done(err); // will print the error on the screen 
            }

            Todo.find({text}).then(function(todos){
                // the 1 is always correct because we always wipe the database first
                expect(todos.length).toBe(1);// because there is one text that we pass in 
                expect(todos[0].text).toBe(text);
                done();
            }).catch(function(e){ // we use catch for any potential error
                done(e);
            });
          });
           
    });
    
    it('should not create todo with invalid body data', function(done){
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end(function(err, res){
            if (err){
                return done(err);
            }

            Todo.find().then(function(todos){
                expect(todos.length).toBe(2);
                done();
            }).catch(function(e){
                done(e);
            });
        });
    });
});

describe('GET /todos', function(){
    // all of this todos is the todo we define above (line 11)
    it('should get all todos', function(done){
        request(app)
            .get('/todos')
            .expect(200)
            .expect(function(res){
                expect(res.body.todos.length).toBe(2)
            })
            .end(done);
    })
})