// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const rmLead = require('./routes/rmLeadRoutes');
const bdmaddleadRoutes = require("./routes/bdmLeadRoutes");
const bdmaddProjectRoutes = require("./routes/bdmAddProjectRoutes");
const bdmScheduleRoutes = require("./routes/bdmScheduleRoutes");
const bdmdraftRequestAdHocRoutes = require('./routes/bdmDraftReqAdHocRoutes');
const cmReqDraft = require('./routes/cmReqDraftRoutes');
const agreementRoutes = require("./routes/agreementReviewRoutes");
const agreementResubmissionRoutes = require("./routes/agreementResubmissionRoutes");
const agreementRegistered = require("./routes/agreementRegisteredRoutes");
const newDraftCreate = require("./routes/newDraftCreateRoutes");
const newDraftResubmission = require("./routes/newDraftResubmissionRoutes");
const project_details = require("./routes/projectDetailsRoutes");
const fetchLawyerName = require("./routes/fetchLawyerNameRoutes");


dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/user', authRoutes);
app.use('/rmLead', rmLead);
app.use("/bdmLead", bdmaddleadRoutes);
app.use("/bdmAddProject", bdmaddProjectRoutes);
app.use("/bdmSchedule", bdmScheduleRoutes);
app.use("/bdm-draft-req", bdmdraftRequestAdHocRoutes);
app.use("/cm-draft-req", cmReqDraft);
app.use("/review", agreementRoutes);
app.use("/resubmission", agreementResubmissionRoutes); 
app.use("/registered", agreementRegistered);
app.use("/new-draft-create", newDraftCreate); 
app.use("/new-draft-create", newDraftResubmission); 
app.use("/project-details", project_details); 
app.use("/fetch", fetchLawyerName); 




const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
