/*import dotenv from "dotenv";
dotenv.config()
 import mongoose from "mongoose";
import express from "express"
const app = express();
(async() => {
    try {
      await  mongoose.connect(`${process.env.MONGODB_URL}/backend`);
      console.log("Connected to MongoDB!");
app.on("error", (err) => {
console.log("ERROR:",error);  
 throw error ;
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`); 
})
    } catch (error) {
        console.log("ERROR:",error);
        throw err
    }
    
})()

*/










import connectDB from "./Db/db.js";
import app from "./app.js";

connectDB()
.then(() => {
app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
} ) 
})
.catch((err)=>{
    console.log("connection faild");
});

