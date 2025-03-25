const db = require('../config/db');


// ✅ GET All Scheduled Meetings
exports.getAllSchedules = (req, res) => {
    const query = `SELECT * FROM bdmscheduleproject ORDER BY created_at DESC`;

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching schedules:", err);
            return res.status(500).json({ success: false, message: "Database error", error: err });
        }
        res.status(200).json({ success: true, data: results });
    });
};

// ✅ GET Scheduled Meetings by created_by
exports.getSchedulesByCreatedBy = (req, res) => {
    const { created_by } = req.params;

    if (!created_by) {
        return res.status(400).json({ success: false, message: "created_by parameter is required" });
    }

    const query = `SELECT * FROM bdmscheduleproject WHERE created_by = ? ORDER BY created_at DESC`;

    db.query(query, [created_by], (err, results) => {
        if (err) {
            console.error("Error fetching schedules:", err);
            return res.status(500).json({ success: false, message: "Database error", error: err });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, message: "No schedules found for the specified user." });
        }

        res.status(200).json({ success: true, data: results });
    });
};


// ✅ GET Meeting by ID
exports.getMeetingById = (req, res) => {
    const meetingId = req.params.id;
    const query = `SELECT meeting_with, meeting_date, mode_of_meeting FROM bdmscheduleproject WHERE id = ?`;

    db.query(query, [meetingId], (err, result) => {
        if (err) {
            console.error("Error fetching meeting:", err);
            return res.status(500).json({ success: false, message: "Database error", error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ success: false, message: "Meeting not found" });
        }
        res.status(200).json({ success: true, data: result[0] });
    });
};

exports.addSchedule = (req, res) => {
    const { meetingWith, meetingDate, meetingTime, modeOfMeeting, meetingVenue, meetingUrl, subject, referenceName, guestName, emailId, phoneNo, createdBy } = req.body;

    const insertQuery = `INSERT INTO bdmscheduleproject 
        (meeting_with, meeting_date, meeting_time, mode_of_meeting, meeting_venue, meeting_url, subject, reference_name, guest_name, email_id, phone_no, created_by) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [meetingWith, meetingDate, meetingTime, modeOfMeeting, meetingVenue || null, meetingUrl || null, subject, referenceName || null, guestName || null, emailId, phoneNo, createdBy];

    db.query(insertQuery, values, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: "Meeting scheduled successfully" });
    });
};


exports.updateSchedule = (req, res) => {
    const id = req.params.id;  // Extract meeting ID from URL
    let { 
        meetingWith, 
        meetingDate, 
        meetingTime, 
        modeOfMeeting, 
        meetingVenue, 
        meetingUrl, 
        subject, 
        emailId, 
        phoneNo, 
        createdBy, 
        referenceName, 
        guestName 
    } = req.body;

    if (!id) {
        return res.status(400).json({ success: false, message: "Meeting ID is required for update" });
    }

    // Ensure that only one field is stored (meetingUrl or meetingVenue)
    if (modeOfMeeting && modeOfMeeting.toLowerCase() === "online") {
        meetingVenue = null;  // Clear venue if online
    } else if (modeOfMeeting && modeOfMeeting.toLowerCase() === "offline") {
        meetingUrl = null;  // Clear meeting URL if offline
    }

    const query = `UPDATE bdmscheduleproject 
                   SET meeting_with = ?, 
                       meeting_date = ?, 
                       meeting_time = ?, 
                       mode_of_meeting = ?, 
                       meeting_venue = ?, 
                       meeting_url = ?, 
                       subject = ?, 
                       email_id = ?, 
                       phone_no = ?, 
                       created_by = ?, 
                       reference_name = ?, 
                       guest_name = ?, 
                       updated_at = NOW()
                   WHERE id = ?`;

    db.query(query, 
        [meetingWith, meetingDate, meetingTime, modeOfMeeting, meetingVenue, meetingUrl, subject, emailId, phoneNo, createdBy, referenceName, guestName, id], 
        (err, result) => {
            if (err) {
                console.error("Error updating meeting:", err);
                return res.status(500).json({ success: false, message: "Database error", error: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: "Meeting not found or no changes made" });
            }
            res.status(200).json({ success: true, message: "Meeting updated successfully" });
        }
    );
};




