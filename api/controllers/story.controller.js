var mongoose = require('mongoose');
var Story = mongoose.model('Story');
var multer = require('multer');
var fs = require('fs');
var formidable = require('formidable');

const upload = multer();

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
    try{
        var stories = await Story.getByPlace(req.params.storyID);
        if(stories.length <= 0){
          res.status(200).json({
            ok: true,
            data: stories,
            message: 'no stories found',
            error:null
          });
          return;
        }
        res.status(200).json({
          ok: true,
          data: stories,
          message: 'stories loaded successfully',
          error:null
        });
      }catch(error){
        res.status(500).json({ error: error.toString() });
      }    
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
    try{
        var stories = await Story.getByPlace(req.params.placeID);
        if(stories.length <= 0){
          res.status(200).json({
            ok: true,
            data: stories,
            message: 'no stories found',
            error:null
          });
          return;
        }
        res.status(200).json({
          ok: true,
          data: stories,
          message: 'stories loaded successfully',
          error:null
        });
      }catch(error){
        res.status(500).json({ error: error.toString() });
      }
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
module.exports.create = async function(req, res) {
    try{
        var filename = "";

        //---------------------------------------------------------------------
        // Uploading the story
        var form = new formidable.IncomingForm();

        form.uploadDir = "./stories";       //set upload directory
        form.keepExtensions = true; 
    
        form.parse(req, function(err, fields, files) {
            // res.writeHead(200, {'content-type': 'text/plain'});
            // res.write('received upload:\n\n');
            console.log("form.bytesReceived");
            //TESTING
            console.log("file size: "+JSON.stringify(files.fileUploaded.size));
            console.log("file path: "+JSON.stringify(files.fileUploaded.path));
            console.log("file name: "+JSON.stringify(files.fileUploaded.name));
            console.log("file type: "+JSON.stringify(files.fileUploaded.type));
            console.log("astModifiedDate: "+JSON.stringify(files.fileUploaded.lastModifiedDate));
            //Formidable changes the name of the uploaded file
            //Rename the file to its original name
            fs.rename(files.fileUploaded.path, files.fileUploaded.path, function(err) {
                filename = files.fileUploaded.path; 
            if (err)
                throw err;
              console.log('renamed complete');  
            });
            //   res.end();
        });
        //End Of Uploading the story
        //-----------------------------------------------------------------------

        var story = new Story({
            caption: req.body.caption,
            user: req.body.user,
            place: req.body.place,
            file: "/stories/" + filename
        });
        let newStory = await Story.create(story);


        res.status(200).json({
            ok: true,
            data: newStory,
            message: 'Story Uploaded Successfully',
            error: null
          });

    } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
  }



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
    try {
        var storyID = req.params.id;

        let newStory = await Place.updateStory(storyID,req.body);
        res.status(200).json({
          ok: true,
          data: newStory,
          message: 'Story updated successfully',
          error: null
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        ok: false,
        data: null,
        message: 'internal server error',
        error: e
      });
    }
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
    try {
        const rules = {
          id: 'required'
        };
        await validateAll(req.params, rules);
      } catch (e) {
        console.log(e);
        res.status(400).json({
          ok: false,
          data: null,
          message: 'validation error bad request',
          error: e
        });
        return;
      }
    
      try {
        var isDeleted = await Story.deleteStory(req.params.id);
        if(!isDeleted){
          res.status(200).json({
            ok: true,
            data: isDeleted,
            message: 'Story is not deleted',
            error: null
          });
        }
        res.status(200).json({
          ok: true,
          data: isDeleted,
          message: 'Story deleted successfully',
          error: null
        });
      } catch (e) {
        console.log(e);
        res.status(500).json({
          ok: false,
          data: isDeleted,
          message: 'Story is not deleted',
          error: e
        });
      }

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
