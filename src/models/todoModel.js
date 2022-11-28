const mongoose = require('../config/db');

let todoSchema = {
    title:{
        type:String,
        required:true
    },
    done :{
        type:Boolean,
        required:true
    }
};
const todoSchma2= new mongoose.Schema( todoSchema);

const TodoModel = mongoose.model('Todo',todoSchma2);

module.exports = TodoModel;