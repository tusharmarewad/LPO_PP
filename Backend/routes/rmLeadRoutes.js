const express = require('express');
const router = express.Router();
const rmLead = require('../controllers/rmLeadController');

router.post('/addLead', rmLead.addLead);
router.get('/getLead', rmLead.getLeads);
router.put('/updateLeadStatus/:id', rmLead.updateLeadStatus);

module.exports = router;
