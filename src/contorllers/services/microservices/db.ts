import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI ?? "mongodb://localhost:27017/testapp";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log(`database is connected at ${mongo_uri}`);
  } catch (err) {
    console.log(err);
  }
};
