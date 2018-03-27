var mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: {
        type: String
    },
    content: {
        type: String
    }
});

mongoose.model('Test', testSchema);