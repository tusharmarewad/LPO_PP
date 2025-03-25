const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/bdmScheduleController');

router.post('/add', scheduleController.addSchedule);
router.get('/fetch/:id', scheduleController.getMeetingById);
// New API to get schedules by created_by
router.get('/schedules/:created_by', scheduleController.getSchedulesByCreatedBy);
router.get('/get-all', scheduleController.getAllSchedules);
router.put('/update/:id', scheduleController.updateSchedule);

module.exports = router;
