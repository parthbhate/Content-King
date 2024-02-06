let express = require('express')
let path = require('path')
const bodyParser = require('body-parser')
let session=require('express-session')
let app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({'secret':'this is my Proj app'}))
let indexRouter=require("./routers/indexRouter")
let adminRouter=require("./routers/adminRouter")
let userRouter = require('./routers/userRouter')

app.use(express.static(path.join(__dirname,"public")))

app.set("view engine","ejs")
app.set("views","./views")

app.use("/",indexRouter)
app.use("/admin",adminRouter)
app.use("/user",userRouter)
app.listen(5005)
console.log("http://localhost:5005")

module.exports = app