const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const User = require("../db/index").User;
const Course = require("../db/index").Course;
const jwt = require("jsonwebtoken");
const Jwt_Secret = "samyaksukhdeve";

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  }).then((result) => {
    res.json({ msg: "user created successfully", result });
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  const user = User.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      Jwt_Secret
    );

    res.json({ token });
  } else {
    res.status(411).json({ message: "Incorrect email and pass" });
  }
});
router.get("/courses",userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const data = await Course.find({});
  res.json(data);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  ).then(() => {
    res.json({
      message: "Purchase complete!",
    });
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const data = await User.find({ username: username }, "purchasedCourses");
  console.log(data);
});

module.exports = router;
