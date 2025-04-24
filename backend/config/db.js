import mongoose from "mongoose";

const url = "https://mangostore-c12m.onrender.com"
// const url = process.env.MONGO_URI 
const connectDB = async (url) => {
  try {
    await mongoose.connect();
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
