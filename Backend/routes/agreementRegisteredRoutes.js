const express = require("express");
const router = express.Router();
const agreementController = require("../controllers/agreementRegisteredController");

// Routes for agreement registration
router.post("/agreement", agreementController.createAgreementRegistered);  // Create
router.get("/agreements", agreementController.getAgreementsRegistered);   // Read
router.put("/agreement/:id", agreementController.updateAgreementRegistered); // Update

module.exports = router;
