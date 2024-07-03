import mongoose from "mongoose"; 
const contactSchema=mongoose.Schema({
    userName:{type:String,require:true},
    email:{type:String,require:true},
    contact:{type:String,require:true},
    
   
},{
    timestamps:true
}
);
export default mongoose.model("Contact",contactSchema);