var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect('mongodb://127.0.0.1:27017/startup',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

var db = mongoose.connection;

db.on('error',()=>console.log('Error in connection to the Database'));
db.once('open',()=>console.log('connected to the database'));

app.post('/myForm',(req,res)=>{

    var name = req.body.name;
    var email = req.body.email;
    var select = req.body.select;
    var message = req.body.message;

    var data = {

        "name":name,
        "email":email,
        "select":select,
        "message":message
    };

    db.collection("staffs").insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        };
        console.log('Record Inserted Successfully');
    
    });
    return res.redirect('confirm.html');

});


app.get('/',(req,res)=>{
    res.set({
        "Allow-access-Allow-Orign": "*"
    });

    return res.redirect('index.html');

});

app.listen(3044,()=>{
    console.log('listening on PORT 3044');
});


