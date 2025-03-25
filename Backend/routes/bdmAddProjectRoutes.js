const express = require('express');
const router = express.Router();
const bdmaddproject = require('../controllers/bdmAddProjectController');

router.post('/add', bdmaddproject.addProject);
router.get('/fetch', bdmaddproject.getProjects);
router.get('/fetch/:created_by', bdmaddproject.getProjectsByCreatedBy);
router.put('/update/:project_id', bdmaddproject.updateProject);

module.exports = router;
