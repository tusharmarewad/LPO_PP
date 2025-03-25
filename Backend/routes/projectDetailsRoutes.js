const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectDetailsController');
const multer = require('multer');

// Configure multer to handle file uploads
const upload = multer({ dest: 'uploads/' });

// API to upload CSV
router.post('/upload-csv', upload.single('csvFile'), projectController.uploadCSV);

// API to fetch all records by project_id
router.get('/fetch-all/:project_id', projectController.fetchAllRecords);

// API to update record by id
router.put('/update/:id', projectController.updateRecord);

module.exports = router;
