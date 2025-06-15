const express = require("express");
const { getUser, registerUser } = require("../controllers/userControllers");

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getUser);

module.exports = router;
