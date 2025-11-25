import express from "express"
import { addTodo, deleteTodo, editTodo, getTodos, toggleComplete } from "../controllers/todoController.js";

const todoRoutes = express.Router();


todoRoutes.get("/getTodo",getTodos)
todoRoutes.post("/addTodo",addTodo)
todoRoutes.put("/editTodo",editTodo)
todoRoutes.patch("/toggleComplete",toggleComplete)
todoRoutes.delete("/deleteTodo",deleteTodo)


export default todoRoutes;