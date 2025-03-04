import mongoose, { connect } from "mongoose";
import expressApp from "express/lib/application.js";



const connectDB = async () => {
   try {
      const connectNow = await mongoose.connect(process.env.MONGODB_URL);
      console.log(`MongoDB Connected successfully: ${connectNow.connection.host}`);
   } catch (error) {
      console.log(`MongoDB connection failed: ${error}`);
      process.exit();
   }
}


export default connectDB;