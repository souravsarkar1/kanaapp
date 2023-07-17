const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
});

const SubTaskModel = mongoose.model('Todo', todoSchema);

module.exports = { SubTaskModel };
