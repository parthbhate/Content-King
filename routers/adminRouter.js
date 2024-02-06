var express = require('express')
var router = express.Router()
router.get("/",(req,res)=>{
    res.render("adminindex")
})
router.get("/admin",(req,res)=>{
    res.render("adminindex")
})

module.exports = router