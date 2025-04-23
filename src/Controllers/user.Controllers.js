import asyncHandler from "../Utils/asyncHandler.js";
import  ApiError  from "../Utils/ApiError.js";
import{User} from "../Models/User.model.js";
import  upladOnCloudinary  from "../Utils/cloudanary.js";
import ApiResponse from "../Utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {

const {fullname,email,password,username} = req.body

console.log("email",email);

//if(!fullname || !email || !password || !username){
  //throw new ApiError(400,"All fields are required")
//}
if(
  [
fullname,email,password,username].some((feild) => feild?.trim()==="")
  ){
    throw new ApiError(400,"All fields are required")
  }

const existUser =  User.findOne(
  {
    $or: [{ email },{ username }]
   }
)

if(existUser){
throw new ApiError(409,"User already exist")
}

const avatarLocalPath = req.files?.avatar [0]?.path
const coverImageLocalPath = req.files?.coverImage [0]?.path

if(!avatarLocalPath){
  throw new ApiError(400,"Avatar is required")
}

const avatar = await upladOnCloudinary(avatarLocalPath)
const coverImage = await upladOnCloudinary(coverImageLocalPath)

if(!avatar ){
  throw new ApiError(400,"Avatar is required")
}

const user = await User.create({
  fullname,
  avatar:avatar.url,
  coverImage:coverImage?.url||"",
  email,
  password,
  username:username.tolowerCase(),
})

const createdUser = awaitUser.findById(user._id).select("-password -refreshToken")

if(!createdUser){
  throw new ApiError(500,"User not found while registering")
}

return res.status(201).json(
  ApiResponse(200,"User registered successfully",createdUser)
)

});

export { registerUser};