import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as express from 'express';
import Book from './models/book';
import routes from './routes/index';
let app = express();

//express routes


//optional for security??
const dev = app.get('env') === 'development' ? true : false;

//optional??
if(dev){
  console.log('dev dev');
  let dotenv = require('dotenv');
  dotenv.load();
}

//database connections
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {

  console.log('Get Served!!!!!');
});
mongoose.connection.on('error', (e) => {
  throw new Error(e);
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//config bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', require('./api/book'));
//static routing

app.use('/', routes);
app.use('/vendor', express.static(path.join(__dirname,'../vendor')));
app.use('/node_modules', express.static(path.join(__dirname,'../node_modules')));
app.use('/client', express.static(path.join(__dirname,'../client')));

//a server routes

//apis


//redirect 404 to home for the sake of AngularJS client-side routes
app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message:'Not Found'});
  } else {
    res.render('index');
  }
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});


// developement error handler
// will print stacktrace
if (app.get('env')=== 'developement') {
  app.use((err: Error, req, res, next) => {

    res.status(err['status']|| 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stracktraces leaked to user
app.use((err:Error, req, res, next) => {
  res.status(err['status'] || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
export = app;
