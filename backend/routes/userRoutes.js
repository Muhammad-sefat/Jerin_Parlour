const express = require("express");
const {
  getUser,
  registerUser,
  loginUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getUser);
router.post("/login", loginUser);

module.exports = router;
