const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todo").then(() => {
  console.log("mongoDB connected");
});

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = todo;
