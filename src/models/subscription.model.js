import mongoose,{Schema} from "mongoose"
const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId, // the one who is subscribing
        ref:"User",
    },
    channel:{
        type:Schema.Types.ObjectId, // one to whom "subscirber" is subscribing
        ref:"User"
    }
})


export const subscription = mongoose.model("Subsription", subscriptionSchema)