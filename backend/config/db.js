import mongoose from "mongoose";

const url = process.env.MONGO_URI || "https://mangostore-c12m.onrender.com"

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
