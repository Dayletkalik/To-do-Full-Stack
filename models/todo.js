import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
    todo: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model("todo", todoSchema);
export default Todo;
