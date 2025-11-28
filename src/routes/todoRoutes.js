import express from "express"
import { addTodo, deleteTodo, editTodo, getTodos, toggleComplete } from "../controllers/todoController.js";

const todoRoutes = express.Router();


todoRoutes.get("/getTodo",getTodos)
todoRoutes.post("/addTodo",addTodo)
todoRoutes.put("/editTodo/:id",editTodo)
todoRoutes.patch("/toggleComplete/:id",toggleComplete)
todoRoutes.delete("/deleteTodo/:id",deleteTodo)


export default todoRoutes;