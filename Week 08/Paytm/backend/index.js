require("dotenv").config();
const express = require("express");
const rootRouter = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
//DB connection
mongoose
  .connect(
    "mongodb+srv://samyaksukhadeve12:wNWTwJkouexGHR3O@paytm-basic.oendudb.mongodb.net/"
  )
  .then(() => console.log("Db connected"));

app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("Backend is running on port 3000");
});
