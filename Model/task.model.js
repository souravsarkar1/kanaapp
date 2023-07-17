const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Todo', 'Doing', 'Done'],
        default: 'Todo'
    },
    subtask: [{
        type: Schema.Types.ObjectId,
        ref: 'Subtask'
    }]
}, {
    versionKey: false
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = { TaskModel };
