const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

var toDoSchema = new Schema({
    username: String,
    toDo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var ToDo = mongoose.model('ToDo',toDoSchema );

module.exports = ToDo;