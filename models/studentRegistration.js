const mongoose  = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/batch5to6")
const student = mongoose.Schema({
    nm:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    },
    no:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    unm:{
        type:String,
        required:true
    },
    pw:{
        type:String,
        required:true
    },
    role:{
         type:String,
         required:true
     }
});
module.exports = mongoose.model("Student",student)