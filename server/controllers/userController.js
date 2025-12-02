import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import generateToken from "../utils/generateToken.js";
const registerUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required."
            })
        }

        const user=await userModel.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exist with this email ."
            })
        }

        const hashedPassword=await bcrypt.hash(password,10);
        // hashed password:-> abcduhfjdnkjsdnkd
        await userModel.create({
            name,
            email,
           password:hashedPassword
        })

        return res.status(201).json({
            success:true,
            message:"account created successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed to register"
        })
        
    }
}

const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        const user= await userModel.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            })
        }

        const isPasswordMatch=await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            })
        }

        generateToken(res,user,`welcome back ${user.name}`);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed to login"
        })
        
    }
}

export {loginUser,registerUser} ;