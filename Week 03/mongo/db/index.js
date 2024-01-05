const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/mongoJwt1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      red: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  desc: String,
  price: Number,
  img: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
