let express = require('express')
let router = express.Router()
//let indexmodel = require('../models/indexmodel')
const student = require('../controllers/studentController')
router.get("/",(req,res)=>{
    res.render("index")
})
router.get("/index",(req,res)=>{
    res.render("index")
})
// router.get("/userindex",(req,res)=>{
//     res.render("userindex")
// })
// router.get("/about",(req,res)=>{
//     res.render("about")
// })
// router.get("/contact",(req,res)=>{
//     res.render("contact")
// })
// router.get("/service",(req,res)=>{
//     res.render("service")
// })

router.get("/register",function(req,res,next){
    res.render("register",{'msg':""});
   // next(req,res)
})
// router.post("/register",function(req,res,next){
//     // console.log(req.body);
//      indexmodel.registeruser(req.body,(result)=>{
//          res.render("register",{'msg':"User register properly"});
//          next(req,res)
//      });
     
// });
router.post("/register",student.insertData)
// router.post("/login",function(req,res,next){
//     // console.log(req.body);
//      indexmodel.userlogin(req.body,(result)=>{
//          res.render("index");
//         // next(req,res)
//      });
     
// });
router.post('/login',student.checkLogin)
router.get('/login',function(req,res,next){
     if(req.session.unm!=undefined)
     {
         req.session.destroy();
     }
     res.render("login")
})
module.exports = router