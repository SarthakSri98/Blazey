var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var url = 'mongodb://Sarthak:Sarthak98@ds147344.mlab.com:47344/blazey';

mongoose.connect(url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error',()=>{ console.log('Some error has occured') });
db.once('open',()=>{ console.log('Database has been connected succesfully') });

app.use(express.static(path.join(__dirname,'./angular')));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept'),
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,PUT,DELETE,OPTIONS,authorization'),
     next();
});