const express = require("express");
const router = express.Router();
const bdmDraftReqAdHocController = require("../controllers/bdmDraftReqAdHocController");


// Route to handle draft request submission
router.post('/ad-hoc', bdmDraftReqAdHocController.bdmDraftReqAdHocController);
router.get('/get-all', bdmDraftReqAdHocController.getDraftRequests);
router.get('/get-all/:created_by', bdmDraftReqAdHocController.getDraftRequestsByCreatedBy);
router.put('/update-draft/:id', bdmDraftReqAdHocController.updateDraftByClientId);
router.put('/update-status', bdmDraftReqAdHocController.updateAddHocStatusByJrLawyer);
router.put('/update-agreement-status', bdmDraftReqAdHocController.updateProjectAgreementsByJrLawyer);

module.exports = router;