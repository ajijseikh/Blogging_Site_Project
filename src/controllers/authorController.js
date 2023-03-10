
const AuthorModel = require("../models/authorModel")
const jwt=require("jsonwebtoken")

// function checkPassword(str)
// {
//     var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//     return re.test(str);
// }


const createAuthor= async function (req, res) {
    try
    {
    let data= req.body 
   
    let savedData= await AuthorModel.create(data)
    return res.status(201).send({status:true,data: savedData})
    }
    catch(err){
    return res.status(500).send({msg:err.message})
    }
}
module.exports.createAuthor = createAuthor


//<========================================= authorLogin ================================>
  
  const authorLogin=async function (req,res){
  try {
        let email=req.body.email
        let password=req.body.password

        if(!email)return res.status(404).send({status:false,msg:"please provide email"})
        if(!password)return res.status(404).send({status:false,msg:"please provide password"})
        if(email&& password){
        const user=await AuthorModel.findOne({email:email,password:password})
        if(!user)return res.status(404).send({status:false,msg:"email or password is incorrect"})
           console.log(typeof(user._id))  // object 
        let token=jwt.sign({
        authorId:user._id.toString(),
        batch:"plutonium",
        organization:"functionUp",
          },
         "FirstProject"
        );
          res.setHeader("x-api-key",token);
         res.status(200).send({status:true,data:token});
             
        }
         else
          {
              res.status(401).send({status:false,msg:"email or password required"})
          }
      } 
         catch (error)
          {
            return res.status(500).send({status:false,error:error})
          }

  }

module.exports.authorLogin=authorLogin