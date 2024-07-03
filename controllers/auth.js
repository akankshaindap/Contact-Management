import expressAsyncHandler from"express-async-handler";
import User from '../models/user.js'
import bcrypt from 'bcrypt'
 export const getUser=expressAsyncHandler(async(req,res)=>{
  const user=await User.find() 
  res.status(200)
   res.json(user)

    

 })
 export const userLogin=expressAsyncHandler(async(req,res)=>{

 })
 export const userRegister=expressAsyncHandler(async(req,res)=>{
  const {userName,email,password}=req.body
  if(!userName||!email||!password){
    res.status(400)
    throw new Error("All Fields are mandatory")
  }
  const userAvailable=await User.findOne({email})
  if(userAvailable){
    res.status(400)
    throw new Error("User Already Exist")
  }
  const hashedPassword=await bcrypt.hash(password,10);
  console.log(hashedPassword)
  const user=await User.create({
    userName,email,password:hashedPassword
  }
  )
  if(user){
    res.status(200).json({_id:user.id,email:user.email})
  }
  else{
    res.status(404)
    throw new Error("INVALID")
  }

 })