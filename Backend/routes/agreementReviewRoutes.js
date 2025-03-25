const express = require("express");
const router = express.Router();
const agreementController = require("../controllers/agreementReviewController");

// Define Routes
router.post("/agreement-review", agreementController.createAgreementReview);
router.get("/fetch-agreement-review", agreementController.getAllAgreementReviews);
router.put("/agreement-review/:id", agreementController.updateAgreementReview);

module.exports = router;
