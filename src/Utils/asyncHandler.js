const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export default asyncHandler;

/*
higer oder function which accept a function in function
const asyncHandler = ()=>{};
const asyncHandler = (func)=>() => func();
const asyncHandler = () =>async()=> {
}
======================================================
const asyncHandler = () =>async(req,res,)=> {
    try {
        awaitfn(req,res,next)
    } catch (error) {
     res.status(error.code||500).json({
        success:false,
        message:error.message
     }) 
    }
}


*/
