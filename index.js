import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index.js'
import mongoose from 'mongoose';
import errorHandler from './middleware/errorHandler.js';
import userRoutes from './routes/userRoutes.js'
dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000
app.use(express.json())
app.use(errorHandler)
app.use("/api/contacts",router)
app.use('/api/user',userRoutes)

mongoose.connect(process.env.CONNECTION_URL);
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on Port ${PORT}`)
})
