import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";
import upload from "../utils/multer.js";
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist with this email .",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // hashed password:-> abcduhfjdnkjsdnkd
    await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "account created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to register",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    generateToken(res, user, `welcome back ${user.name}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to login",
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    return res.status().cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out Succesfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to Logout",
    });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const userId = req.id;
    // -password ->means we dont need password
    const user = await userModel.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        success: "profile not found",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "failed to Logout",
    });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.id;
    const { name } = req.body;
    const profilePhoto = req.file;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }
    // extraact public id of old image from url exists on cloudinary
    if(user.PhotoUrl){
        const publicId=user.PhotoUrl.split("/").pop().split(".")[0]  // extract public id
        deleteMediaFromCloudinary(publicId);
    }
    // upload new photo
    const cloudResponse=await uploadMedia(profilePhoto.path);
    const PhotoUrl=cloudResponse.secure_url;
    const updatedData={name,PhotoUrl};
    const updateUser=await userModel.findByIdAndUpdate(userId,updatedData,{new:true}).select("-password");

    return res.status(200).json({
        success:true,
        user:updateUser,
        message:"Profile updated successfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};

export { loginUser, registerUser, logoutUser, getUserProfile ,updateUserProfile};
