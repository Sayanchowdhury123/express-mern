import mongoose from "mongoose";

export async function dbConnect(){
  try {
   await mongoose.connect(process.env.url)
   console.log("database conneted");
  } catch (error) {
      console.log(error);
  }
}
