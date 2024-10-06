// its a wrapper function , apne ko har baar db talking function
// me bar bar yr wala boiler plate code na likhna pade is liye,
// we are creating this generalized boiler plate code

const asyncHandler=(requestHandler)=>{
     (req,res,next)=>{
       Promise.resolve(requestHandler(res,req,next)).catch((err)=>{next(err)})
    }
}




// const asyncHandler=(fn)=>{ async(req,res,next)=>{
//     try{
//         await fn(req,res,next);

//     } catch(err){
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }  }


export {asyncHandler}