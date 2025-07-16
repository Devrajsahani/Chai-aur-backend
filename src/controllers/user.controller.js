import {asyncHandler} from "../utils/asynchandler";
import {Apierror} from "./utils/apierror.js"
import{user, User} from "../models/user.models.js"

const registerUser = asyncHandler(async(req, res )=>{
    res.status(200).json({
        message:"ok"
    })
})

const {fullName,email,username,password} = req.body // here all the things are written that we need to extract,
console.log("email:",email);
if(fullName===""){
    throw new Apierror(400,"full name is required")
}
// using this we can check that if all the elements are there in the fields or not, 
if (
    [fullName,email, password, username].some((field))=>
        field?.trim()==="")
{
    throw new Apierror(400, "All the fields are required")
}

User.findOne({
    $or:[{username},{password},{}] // here we can use any number of object here, 
})
if (existedUser) {
    throw new Apierror(400,"User already exists!")
    
}

const createdUser = await User.findById(user._id).select(
    "-password -RefreshToken"
)
if(!createdUser){
    throw Apierrorerror (400, "User not found ! ")
}
return res.status(201).json{
    new Apiresponse(200, creadtedUser,"user is resgistered successfully")
    
}

const avatar = await uploadoncloudinary(avatar)
// since we made thsi helper file we don't need to write the code for the res. body and vagera vagera, we can simply 
// use if statement to reqord 
// we got all the details fo the database from doing (req.body), now this data can come from anywhere 
// it could come from the form website, app, request, from anywhere.
// now to destructure the data that we have there we use const {}
export {registerUser};