/*const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
} = require("../controllers/authController");

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router; */

//v.1.2
const express = require('express');
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
} = require('../controllers/authController');

router.get('/test', test);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

