const User = require("../modules/User");
const asyncHandler=require('express-async-handler')
const createUser=asyncHandler (async (req,res) =>{
    const email=req.body.email
    const finduser=await User.findOne({email:email})
    if(!finduser){
        const newUser=await User.create(req.body)
res.json(newUser)
    }else{
    throw new Error('user Arldy exist')
    }
})
const loginUserCtrl=asyncHandler(async (req,res)=>{
    const {email ,password}=req.body
 const finduser=await User.findOne({email})
if(finduser && await finduser.isPasswordMatch)
})
module.exports={
    createUser,
    loginUserCtrl
}