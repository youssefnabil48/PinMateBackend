var mongoose = require('mongoose');
//var dburl = 'mongodb://localhost:27017/PinMate';
var dburl = 'mongodb+srv://pin:pinmate@pin-mate-9cfx5.mongodb.net/PinMate?retryWrites=true'
var retry = null;
mongoose.Promise = global.Promise;
mongoose.connect(dburl,{autoIndex: false});

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dburl);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
// these signals are only recognised by unix based systems
function gracefulShutdown(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
}

// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        console.log("SIGUSR2 signal is fired");
        process.exit(0);
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('App termination (SIGINT)', function() {
        console.log("SIGINT signal is fired");
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('App termination (SIGTERM)', function() {
        console.log("SIGTERM signal is fired");
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS
require('../users.model');
require('../places.model');
require('../trackers.model');
require('../notifications.model');
require('../hangoutRequests.model');
require('../friendRequests.model');
require('../errorReports.model');
require('../chats.model');
require('../story.model');
require('../test.model');
