const express = require('express');
const router = express.Router();
const cmReqDraftController = require('../controllers/cmReqDraftController');



router.get('/get-project-Id', cmReqDraftController.getCompletedProjectsForAgreement);
router.get('/get-project-Id-submited-by-cm', cmReqDraftController.getProjectIdSubmitedByClientManager);

router.post('/add-new-agreement', cmReqDraftController.addNewAgreement);
router.get('/getAllAgreements', cmReqDraftController.getAllAgreements);
// router.get('/getAllAgreements/:created_by', cmReqDraftController.getAgreementsByCreatedBy);

router.get('/getAllNewProjectAgreements/:userId', cmReqDraftController.getAgreementsByDraftedBy);

router.put('/updateAgreement/:project_id', cmReqDraftController.updateAgreement);

router.get('/agreements/:userId', cmReqDraftController.AgreementJrLawyer);
router.get('/addhoc-agreement/:userId', cmReqDraftController.AddHocJrLawyer);
router.get('/addhoc-agreement-redo/:userId', cmReqDraftController.fetchRedoAddHocs);
router.get('/project-agreement-redo/:userId', cmReqDraftController.fetchRedoProjectAgreements);

module.exports = router;