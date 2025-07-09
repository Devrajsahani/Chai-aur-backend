import mongoose,{schema}from"mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userschema=new Schema({
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        
    },
    email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        
    },
    fullname:{
            type:String,
            required:true,
            unique:true,
            trim:true,
    },
    avatar:{
            type:String,
    },
    watchhistory:[
        {
        types:Schema.Types.ObjectId,
        ref:"Video"
        } 
    ],
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshtoken:{
        type:String,
    },
    timestamps:true,
    
})

userSchema.pre("save", async function (next){
    if(this.isModified("password"))return next();
    // so here we are wriitng an extra line of code for checking that if we are updating any other field then our password field is not getting updated time to time, so we used if statement. and then after we wil call next 
    this.password = bcrypt.hash(this.password, 8)
    next()
}) // befoer the data getting saved this will run and 

userSchema.methods.generateAccessToken = function(){ // HERE WE ARE WATCHING HOW TO USE THE JWT TOKEN
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expriresIn:process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}
userSchema.methods.generateRefreshToken= function(){}


export const user = mongoose.model("User",userschema)