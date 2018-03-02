module.exports.add = function(req, res) {
    // body...
    var result = parseInt(req.params.x) + parseInt(req.params.y);
    //res.json({"result":result});
    res.send(String(result));
};