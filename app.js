var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var fs = require('fs');


var routes = require('./api/routes');
var app = express();

//For logs
var accessLogStream = fs.createWriteStream(path.join( './logs/', 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))
app.use(morgan('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('logs'));

//jwt authorization middleware
// app.use('/', function(req, res, next){
//   if (req.originalUrl === '/api/user/signin' || req.originalUrl === '/api/user/create') {
//    next();
//   } else {
//     if(req.headers && req.headers.authorization){
//       jwt.verify(req.headers.authorization, 'secret', function(err, decoded) {
//         if (err) {
//           res.status(403).json({
//             ok: false,
//             data: null,
//             message: 'Forbidden, please sign in again',
//             error: 'no jwt authorization header or expired jwt token'
//           });
//           return;
//         }
//         req.user = decoded;
//         next();
//       });
//     }else{
//       res.status(403).json({
//         ok: false,
//         data: null,
//         message: 'Forbidden, please sign in again',
//         error: 'no jwt authorization header or expired jwt token'
//       });
//       return;
//     }
//   }
// });
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;