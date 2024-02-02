const express = require("express");
const { createTodo, updateTodo } = require("./types");
const todo = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//create todos
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const paresePayload = createTodo.safeParse(createPayload);
  if (!paresePayload.success) {
    res.status(411).json({
      msg: "You send the wrong input",
    });
  }
  //put in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(200).json({
    msg: "Todo created successfully",
  });
});

//get all todos
app.get("/todo", async (req, res) => {
  const todos = await todo.find();
  res.json({ todos });
});

//update
app.put("/completed", async (req, res) => {
  const updatedPayload = req.body;
  const paresdPayload = updateTodo.safeParse(updatedPayload);

  if (!paresdPayload.success) {
    res.status(411).json({
      msg: "You entered wrong input",
    });
  }

  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("backend is running on port 3000");
});
