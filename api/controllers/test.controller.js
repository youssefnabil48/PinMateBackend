var mongoose = require('mongoose');
var TestModel = mongoose.model('Test');


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
module.exports.getAll = function(req, res) {
    var tests = TestModel.find(function(err, tests) {
        if (err)
            res.status(500).json({ error: err });
        else {
            if (!tests) {
                res.json({ msg: "no object found" });
            } else {
                res.json({
                    msg: "success",
                    tests: tests
                });
            }
        }
    });
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
module.exports.get = function(req, res) {
    var test = TestModel({ _id: req.params.id });
    var foundTest = TestModel.findOne(test, function(err, foundTest) {
        if (err)
            res.status(500).json({ error: err });
        else {
            if (!foundTest) {
                res.json({ msg: "no object found" });
            } else {
                res.json({
                    msg: "success",
                    tests: foundTest
                });
            }
        }

    });
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
    console.log(req.body);
    var t = new TestModel({
        name: req.body.name,
        content: req.body.content
    });
    t.save(function(err) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ msg: "success" });
        }
    });
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
    var test = TestModel.find(req.params.id, function(err, foundObj) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            if (!foundobj) {
                res.json({ error: "no object found" });
            } else {
                foundObj.name = req.body.name;
                foundObj.content = eq.body.content;
                res.json({ msg: "success" });
            }
        }
    });
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
    var test = TestModel({ _id: req.params.id });
    TestModel.remove(test, function(err, foundTest) {
        if (err)
            res.status(500).json({ error: err });
        else {
            if (!foundobj) {
                res.json({ error: "no object found" });
            } else {
                res.json({ msg: "success" });
            }
        }
    });
};
