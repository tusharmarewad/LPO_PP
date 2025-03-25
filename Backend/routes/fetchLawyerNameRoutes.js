const express = require("express");
const router = express.Router();
const userController = require("../controllers/fetchLawyerNameController");

router.get("/jrlawyer", userController.getUsersByRole);

module.exports = router;