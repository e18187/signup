import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './common/db.js';
import userRoute from './Routes/user.route.js';
dotenv.config({});
const app=express();
app.use(express.json());
app.use('/api',userRoute);
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORt}`);
    connectDB();
})

