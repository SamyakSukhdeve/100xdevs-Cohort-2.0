const Admin = require("../db/index.js").Admin;
const jwt = require("jsonwebtoken");
const Jwt_Secret = "samyaksukhdeve";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, Jwt_Secret);
    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({ message: "you are not authenticated" });
    }
  } catch (error) {
    res.json({ message: "incorrect inputs" });
  }
}

module.exports = adminMiddleware;
