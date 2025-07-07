import mongoose,{schema}from"mongoose"
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



export const user = mongoose.model("User",userschema)