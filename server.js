import dotenv from "dotenv"
dotenv.config()

import express from "express";
import cors from "cors"
import { dbConnect } from "./src/config/dbConnect.js";
import todoRoutes from "./src/routes/todoRoutes.js";

const app = express()
const port = 9001;
app.use(express.json())
app.use(cors())
app.use("/",todoRoutes)



dbConnect()

app.listen(port,() => {
  console.log("server started port 9001");
})
