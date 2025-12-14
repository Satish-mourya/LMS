import jwt from "jsonwebtoken"
const { verify } = jwt;

const isAuthenticated=async (req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"User not authorized"
            })
        }

        const decode = await verify(token,process.env.SECRET_KEY)
        if(!decode){
            return res.status(401).json({
                success:false,
                message:"invalid token"
            })
        }

        req.id=decode.userId;
        next();

    } catch (error) {
        console.log(error);
        
    }
}

export default isAuthenticated;