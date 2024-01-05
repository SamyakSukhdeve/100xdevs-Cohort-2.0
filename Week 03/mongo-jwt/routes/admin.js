const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const Jwt_Secret = "samyaksukhdeve";

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({
    username: username,
    password: password,
  }).then((result) => {
    console.log(result);
  });

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  const user = Admin.find({
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

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const body = req.body;
  Course.create({
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    img: req.body.img,
  }).then((result) => {
    res.json({ message: "course created successfully", couresId: result._id });
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const data = await Course.find({});
  res.json({
    courses: data,
  });
});

module.exports = router;
