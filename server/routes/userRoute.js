import express from "express";
import {registerUser,loginUser, getUserProfile, logoutUser, updateUserProfile} from "../controllers/userController.js"
import isAuthenticated from "../middleware/isAuthenticate.js";
const userRouter=express.Router();
// router for login and register
userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.get("/profile",isAuthenticated,getUserProfile);
userRouter.get("/logout",logoutUser);
userRouter.put("/profile/update",isAuthenticated,updateUserProfile);

export  default userRouter;