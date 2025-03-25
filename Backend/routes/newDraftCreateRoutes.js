const express = require("express");
const router = express.Router();
const draftController = require("../controllers/newDraftCreateController");

// Routes for draft creation
router.post("/draft", draftController.createDraft);  // Create
router.get("/drafts", draftController.getDrafts);   // Read
router.put("/draft/:id", draftController.updateDraft); // Update

module.exports = router;
