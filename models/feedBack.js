const mongoose  = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/batch5to6")
const feedback = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    unm:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    
    msg:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("FeedBack",feedback)