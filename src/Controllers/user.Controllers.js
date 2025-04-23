import asyncHandler from "../Utils/asyncHandler.js";


const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json(
    {message: "User registered successfully!"}
)
});

export { registerUser};