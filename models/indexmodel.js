// var db = require("./connection")
// function indexmodel()
// {       
  
//   this.userlogin=(userDetails,cd)=>{
//     var rs= db.collection("student").find({"unm":userDetails.unm,"pw":userDetails.pw,"role":"user"});
//       if(rs.err)
//       console.log(err)
//       else
//       cd(rs.result)
//     }
    

// //  this.usershow=(data,cb)=>{
// // db.collection('student2').find({"nm":"jayprakash"}).toArray((err,result)=>{
// //      if(result.length>0)
// //      {
// //        cb(result)
// //      }else{
// //        console.log(err)
// //      }
// //     })
// //  }
// this.registeruser=async(userDetails,cb)=>{
//     async function getResults() {
//         return db.collection('student').find().toArray();
//                }
    
//     const result = await getResults();
//           if(result.length>0)
//               {
                
//                 var max_id=result[0]._id;
//                 for(let row of result)
//                 {
//                   if(max_id<row._id)
//                   {
//                     max_id=row._id
//                   }
//                   userDetails._id=max_id+1
//                 }
//               }else{
//                 userDetails._id=1
//               }
      
//     userDetails.status=1
//     userDetails.role="user"
//     userDetails.dt=Date()
//     db.collection("student").insertOne(userDetails,(err,result)=>{
//         err? console.log(err):cb(result)

//     });
// }
// }

// module.exports = new indexmodel()