const res = require('express/lib/response')
const Student = require('../models/studentRegistration')
const FeedBack = require('../models/feedBack')
const feedData = async(req,res)=>{
    try{
       // console.log(req)
        const feed = new FeedBack({
            name:req.body.name,
            unm:req.body.unm,
            mail:req.body.mail,
            msg:req.body.msg
        })
        const result = await feed.save()
        res.render('feedback')
    }catch(error){
        res.send(error)
    }
}


const insertData = async(req,res)=>{
    try{
        const student = new Student({
            nm:req.body.nm,
            add:req.body.add,
            no:req.body.no,
            mail:req.body.mail,
            unm:req.body.unm,
            pw:req.body.pw,
            role:"user"
        })
        const result = await student.save()
        res.render('register')
    }catch(error){
        res.send(error)
    }
}

const checkLogin = async(req,res)=>{
    try{
    unm=req.body.unm;
    pw=req.body.pw;
    //console.log(unm,pw);
    const result=await Student.findOne({unm,pw})
    //res.redirect('/user')
    if(result!=null)
    {
      try{
      req.session.unm=result.unm;
      req.session.role=result.role;   
     if(result.role=='admin')
      {
       res.redirect('/admin')
      }else
      if(result.role=="user")
      {
        res.redirect('/user')
      }else{
        res.render("login")
      }
  }catch(error)
  {console.log(error)}
  }else{
      res.render("login")
  }  
}catch(error){
    res.send(error)
}
}
module.exports = {
    insertData,checkLogin,feedData
}