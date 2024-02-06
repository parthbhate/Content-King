var mongoose = require('mongoose')
var url = "mongodb://127.0.0.1:27017/batch5to6"
mongoose.connect(url)
var db = mongoose.connection
console.log("Successfully Connected to Mongodb Database")
module.exports = db