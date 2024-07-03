import mongoose from "mongoose";
const userSchema= mongoose.Schema({
    userName:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},

 },
{
   timestamps:true
}
);
 export default mongoose.model("User",userSchema);