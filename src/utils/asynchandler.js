//const asyncHandler = ()=>{}

const asyncHandler= (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}
export{asyncHandler};

//const asyncHandler = (func) => () =>{} // by this we are creating a higher order fucntion 
// const asyncHandler = (func) => async (req, res, next)=>{
//   try{
//     await fn(req,res,next) // basically we build a wraper here whcih will make our life.

//   } catch(error){
//     res.status(err.code || 800).json({
//         success:false,
//         message:err.message,
//     })
//   }

// }