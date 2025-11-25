import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model("todoModel",todoSchema)