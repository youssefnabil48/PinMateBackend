var mongoose = require('mongoose');
var Story = mongoose.model('Story');


/*
    GET function that get all the tests
    Takes: null
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
        All tests
    }
    Calling route: '/test/all'
*/
module.exports.getByUser = function(req, res) {

};

/*
    GET function that get test by it's id
    Takes:
        params: {
            id : id of the object
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route: '/test/get/:id'
*/
module.exports.getByPlace = function(req, res) {

};


/*
    POST function that create a new test in
    Takes:
        body: {
            name : name of the test
            content : content of the test
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
        All tests
    }
    Calling route: '/test/create'
*/
module.exports.create = function(req, res) {

};

/*
    UPDATE function that update test in database
    Takes:
        params : {
            id : the id of the test to be updated
        }
        body: {
            name : the new test name
            content : the new test content
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route: '/test/update'
*/
module.exports.update = function(req, res) {

};

/*
    DELETE function that get all the tests
    Takes:
        params: {
            id : the id of the object to be deleted
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route: '/test/delete'
*/
module.exports.delete = function(req, res) {

};


/*
    DELETE function that get all the tests
    Takes:
        params: {
            id : the id of the object to be deleted
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route: '/test/delete'
*/
module.exports.getFile = function(req, res) {

};
