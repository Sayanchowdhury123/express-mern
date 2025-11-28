import todoSchema from "../model/todoSchema.js";

export const addTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (title) {
      const newTodo = await todoSchema.create({
        title,
      });

      if (newTodo) {
        return res.status(201).json({
          status: true,
          message: "new todo added",
          newTodo,
        });
      }
    }
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Todo not created",
      data,
    });
  }
};

export const getTodos = async (req, res) => {
  try {
    const data = await todoSchema.find({});
    if (data) {
      return res.status(201).json({
        status: true,
        message: "new todo added",
        data,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "failed to fetch",
      data,
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const data = await todoSchema.findByIdAndDelete(id);
      if(!data){
            return res.status(400).json({
        status: false,
        message: "todo not found",
      });
      }
      return res.status(200).json({
        status: true,
        message: "todo deleted",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "failed to delete the todo",
      
    });
  }
};

export const editTodo = async (req, res) => {
  try {
     const { id } = req.params;
    const {  newTitle } = req.body;
    if (id) {
      const todo = await todoSchema.findById(id);
      todo.title = newTitle;
      await todo.save();
      return res.status(200).json({
        status: true,
        message: "todo edited",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "failed to edit the todo",
      
    });
  }
};

export const toggleComplete = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoSchema.findById(id);
    if (todo) {
      todo.complete = !todo.complete;
      await todo.save();
      return res.status(200).json({
        status: true,
        message: "todo edited",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "failed to edit the todo",
      
    });
  }
};
