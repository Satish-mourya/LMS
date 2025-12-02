import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors"


dotenv.config();
const app=express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());  // need to give origin 
// database connection

connectDB()
const PORT=process.env.PORT|| 3000;

app.get("/home",(req,res)=>{
     res.json({
        success:true,
        message:  "it is working"
    })
})

// user login/register end point

app.use("/api/v1/user",userRouter);



app.listen(PORT,()=>{
    console.log(`server listen on ${PORT}` );
    
})






 