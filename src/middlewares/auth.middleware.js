import { Apierror } from "../utils/Apierror";
import { asyncHandler } from "../utils/asyncHandler";
import { JsonWebTokenError } from "jsonwebtoken";
import { User } from "../models/user.models";

export const verifyJWT = asyncHandler(async(req, res,
    next)=>{
      try {
         const token =  req.cookies?.accessToken || req.header
          ("Authorization")?.replace("Bearer","")
  
          if(!token){
              throw new Apierror(401,"unauthorized request");
          }
          const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
          await User.findById(decodedToken?._id).select("-password -refreshToken")
          if(!User){
              throw new Apierror(401,"invalid Access Token")
              req.user = user;
              next();
          }
      } catch (error) {
        throw new Apierror(404,"Unknown error found")
        
      }
})
