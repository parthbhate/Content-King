let express = require('express')
let router = express.Router()
let session = require('express-session')
const student = require('../controllers/studentController')
router.use((req,res,next)=>{
    if(req.session.unm!=undefined && req.session.role=='user' || req.session.role=='admin')
    {
      next()
    }else{
       res.redirect("/login") 
    }
    })
router.get('/',(req,res,next)=>{
    res.render("userindex")
})
router.get('/userindex',(req,res,next)=>{
     res.render("userindex")
 })
 router.get('/about',(req,res,next)=>{
    res.render("about")
})
router.get('/service',(req,res,next)=>{
    res.render("service")
})
router.get('/contact',(req,res,next)=>{
    res.render("contact")
})
router.post('/feedback',student.feedData)
router.get('/feedback',(req,res,next)=>
{
    res.render("feedback")
})




module.exports = router