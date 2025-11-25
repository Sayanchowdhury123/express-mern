import dotenv from "dotenv"
dotenv.config()
import express from "express";
import { dbConnect } from "./src/config/dbConnect.js";
import todoRoutes from "./src/routes/todoRoutes.js";

const app = express();
app.use(express.json())

app.use("/",todoRoutes)


dbConnect()

const port = 9000;
app.listen(port, () => {
  console.log("server listening on port 9000");
});


