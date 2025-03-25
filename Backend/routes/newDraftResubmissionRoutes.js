const express = require("express");
const router = express.Router();
const draftController = require("../controllers/newDraftResubmissionController");

// Routes for draft resubmission
router.post("/draft-resubmission", draftController.createDraftResubmission);  // Create
router.get("/draft-resubmissions", draftController.getDraftResubmissions);   // Read
router.put("/draft-resubmission/:id", draftController.updateDraftResubmission); // Update

module.exports = router;
