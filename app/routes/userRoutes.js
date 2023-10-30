// app/routes/userRoutes.js
const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/patients", userController.getAllPatients);
router.get("/contact", userController.getContactUs);


module.exports = router;

