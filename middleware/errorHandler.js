import { constants } from "../constants.js";
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ?res.statusCode :500;
    switch (statusCode) {
        case NOT_FOUND:
            res.json({
                title:"NOT FOUND",
                message:err.message,
                stackTrace:err.stack

            })
            
            break;
            case NOT_VALID:
                res.json({
                    title:"NOT FOUND",
                message:err.message,
                stackTrace:err.stack
                })
    
        default:
            console.log("no error")
            break;
    }

}
export default errorHandler;