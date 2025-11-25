import mongoose from "mongoose";



export async function dbConnect() {
  try {
    mongoose.connect(process.env.url);
    console.log("mogodb connected");
  } catch (error) {
    console.log("database not connected");
  }
}
