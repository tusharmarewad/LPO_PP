const express = require("express");
const router = express.Router();
const bdmaddleadController = require("../controllers/bdmLeadControllers");

// Define API routes
router.get("/all", bdmaddleadController.getAllLeads);
router.get("/all/:created_by", bdmaddleadController.getLeadsByCreatedBy);  // Get all leads
router.get("/:id", bdmaddleadController.getLeadById); // Get lead by ID
router.post("/add", bdmaddleadController.addLead);
router.put("/update-status/:lead_id", bdmaddleadController.updateLeadStatus); // Update lead status


module.exports = router;
