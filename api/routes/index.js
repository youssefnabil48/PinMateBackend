var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/*importing controllers*/
var userController = require('../controllers/user.controller');
var chatController = require('../controllers/chat.controller');
var errorReportController = require('../controllers/errorReport.controller');
var friendRequestController = require('../controllers/friendRequest.controller');
var hangoutRequestController = require('../controllers/hangoutRequest.controller');
var notificationController = require('../controllers/notification.controller');
var placeController = require('../controllers/place.controller');
var recommendationController = require('../controllers/recommendation.controller');
var searchController = require('../controllers/search.controller');
var trackerController = require('../controllers/tracker.controller');
var storyController = require('../controllers/story.controller');

//team individuals test controllers
var youssefIndividualTest = require('../individualTests/youssef.individual.test');
var saraIndividualTest = require('../individualTests/sara.individual.test');
var hagarIndividualTest = require('../individualTests/hagar.individual.test');
var doniaIndividualTest = require('../individualTests/donia.individual.test');
var hussienIndividualTest = require('../individualTests/hussien.individual.test');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ title: 'Express app' });
});
/* defining routes */
// Hint: no routes for email controller
// Hint: no routes for chat controller for now(using web sockets)

// userCTRL routes
router.get('/api/user/all', userController.getAll);
router.get('/api/user/:id', userController.get);
router.post('/api/user/create', userController.create);
router.post('/api/user/update/:id', userController.update);
router.delete('/api/user/delete/:id', userController.delete);
router.post('/api/user/signin', userController.signIn);
router.get('/api/user/signout', userController.signOut);
router.get('/api/user/verifyemail', userController.verifyEmail);
router.get('/api/user/forgetpassword', userController.forgetPassword);

//errorReportCTRL routes
router.get('/api/errorReport/all', errorReportController.getAll);
router.get('/api/errorReport/:id', errorReportController.getByID);
router.get('/api/errorReport/:userID', errorReportController.getByUser);
router.post('/api/errorReport/create', errorReportController.create);
router.post('/api/errorReport/update/:id', errorReportController.update);
router.delete('/api/errorReport/delete/:id', errorReportController.delete);

//friendRequestCTRL routes
router.get('/api/friendRequest/all', friendRequestController.getAll);
router.get('/api/friendRequest/:id', friendRequestController.get);
router.post('/api/friendRequest/create', friendRequestController.create);
router.post('/api/friendRequest/update/:id', friendRequestController.update);
router.delete('/api/friendRequest/delete/:id', friendRequestController.delete);

//hangoutRequestCTRL routes
router.get('/api/hangoutRequest/getuserrequests', hangoutRequestController.getUserRequests);
router.get('/api/hangoutRequest/:id', hangoutRequestController.get);
router.post('/api/hangoutRequest/create', hangoutRequestController.create);
router.post('/api/hangoutRequest/update/:id', hangoutRequestController.update);
router.delete('/api/hangoutRequest/delete/:id', hangoutRequestController.delete);

//notificationCTRL routes
router.get('/api/notification/getusernotifications', notificationController.getUserNotifications);
router.post('/api/notification/create', notificationController.create);
router.post('/api/notification/update/:id', notificationController.update);
router.delete('/api/notification/delete/:id', notificationController.delete);

//placeCTRL routes
router.get('/api/place/all', placeController.getAll);
router.get('/api/place/getbyid/:id', placeController.getById);
router.get('/api/place/getbyname/:name', placeController.getByName);
router.post('/api/place/create',  placeController.create);
router.post('/api/place/update/:id',  placeController.update);
router.delete('/api/place/delete/:id',  placeController.delete);
router.post('/api/place/post/create',  placeController.addPost);
router.delete('/api/place/post/delete/:postId',  placeController.deletePost);
router.post('/api/place/review/create',  placeController.addReview);
router.delete('/api/place/review/delete/:reviewId',  placeController.deleteReview);
router.post('/api/place/favorite',  placeController.favoritePlace);
router.post('/api/place/unfavorite',  placeController.unfavoritePlace);
router.post('/api/place/event/create',  placeController.addEvent);
router.delete('/api/place/event/delete/:eventId',  placeController.deleteEvent);

//trackerCTRL routes
router.get('/api/tracker/getfriendstracker', trackerController.getFriendsTracker);
router.get('/api/tracker/:id', trackerController.get);
router.post('/api/tracker/create',  trackerController.create);
router.post('/api/tracker/update/:id',  trackerController.update);
router.delete('/api/tracker/delete/:id',  trackerController.delete);

//storyCTRL routes
 router.get('/api/story/getbyuser/:userId', storyController.getByUser);
 router.get('/api/story/getbyplace/:placeId', storyController.getByPlace);
 router.post('/api/story/create',  storyController.create);
 router.post('/api/story/update/:id',  storyController.update);
 router.delete('/api/story/delete/:id',  storyController.delete);
 router.get('/api/story/file/:storyId', storyController.getFile);

//searchCTRL routes
router.get('/api/search/:query', searchController.generalSearch);

//recommendationCTRL routes
router.get('/api/reccomend/place', recommendationController.recommendPlace);

/* importing test controllers and routes */
var testController = require('../controllers/test.controller');
router.get('/test/all', testController.getAll);
router.get('/test/get/:id', testController.get);
router.post('/test/create', testController.create);
router.post('/test/update/:id', testController.update);
router.delete('/test/delete/:id', testController.delete);

//routes for individuals devs
router.get('/youssef/test', youssefIndividualTest.test);
router.get('/sara/test/:id', saraIndividualTest.test);
router.get('/donia/test', doniaIndividualTest.test);
router.get('/hagar/test', hagarIndividualTest.test);
router.get('/hussien/test', hussienIndividualTest.test);

/* exporting router module */
module.exports = router;
