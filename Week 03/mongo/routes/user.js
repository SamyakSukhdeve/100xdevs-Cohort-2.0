const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course } = require("../db/index");
const User = require("../db/index").User;

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

router.get("/courses", async (req, res) => {
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
