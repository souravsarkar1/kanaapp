const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const subtaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});


const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['Todo', 'Doing', 'Done'],
    default: 'Todo'
  },
  subtasks: [subtaskSchema] 
});


const boardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tasks: [taskSchema] 
});


const combinedSchema = new Schema({
  boards: [boardSchema] 
});

const CombinedModel = mongoose.model('bords', combinedSchema);

module.exports = {CombinedModel};
