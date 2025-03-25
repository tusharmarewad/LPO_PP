const express = require("express");
const router = express.Router();
const agreementResubmissionController = require("../controllers/agreementResubmissionController");

// Define Routes
router.post("/agreement-resubmission", agreementResubmissionController.createAgreementResubmission);
router.get("/agreement-resubmission", agreementResubmissionController.getAllAgreementResubmissions);
router.put("/agreement-resubmission/:id", agreementResubmissionController.updateAgreementResubmission);

module.exports = router;
