// Import mongoose to connect to MongoDB
import mongoose from "mongoose";

//Function to connect to MongoDB Database
export const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB URI
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // If successful, log the connected host
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If an error occurs, log it and exit the process with failure code (1)
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Stops the app (1 = failure, 0 = success)
  }
};
