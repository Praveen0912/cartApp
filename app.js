var express = require('express');
var app = express();                                 //create our app w/express
var mongoose = require('mongoose');                  //mongoose for mongodb
var port = process.env.PORT || 8080;                 //set the port
var database = require('./config/database');         //load the database config
var morgan = require('morgan');                      //log requests to the console 
var bodyParser = require('body-parser');             //pull information from HTML POST
var methodOverride = require('method-override');     //simulate DELETE and PUT
var cors = require('cors');
//var path = require('path');

//const routes = require('./app/routes/index');
const users = require('./app/routes/users');

mongoose.connect(database.url);                                //connect to mongoose 
app.use(cors());                                               //adding middleware  -cors
//app.use(express.static(path.join(__dirname, 'public/angularPart/dist/angularPart')));      //static files location 
app.use(morgan('dev'));                                        //log every requestto the console
app.use(bodyParser.urlencoded({ extended:false}));             //parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                    //parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json'})); //parse application/vnd.api+json as json
app.use(methodOverride());                                     

// [SH] Use the API routes when path starts with /api
app.use('/api', users);
//app.use('*', routes);

app.listen(port);
console.log("Running on port 8080");




