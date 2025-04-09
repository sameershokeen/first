import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";
const connectDB = async () => {
  try {
 const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/backend`)
console.log(`\n MongoDB connected!!DB HOST:${connectionInstance.Connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
