const db = require('../config/db');


exports.getProjects = (req, res) => {
    try {
        // WHERE users.role_id = 4
        const getProjectsQuery = `
           SELECT 
              addproject .*, 
              users.name AS created_by_name 
          FROM addproject  
          LEFT JOIN users ON addproject.created_by = users.id 
          ORDER BY addproject.created_at DESC
          `;
          
        db.query(getProjectsQuery, (err, results) => {
            if (err) {
                console.error("Error fetching projects:", err);
                return res.status(500).json({ success: false, message: "Database error", error: err });
            }

            res.status(200).json({ success: true, data: results });
        });
    } catch (error) {
        console.error("API error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.getProjectsByCreatedBy = (req, res) => {
    try {
        const { created_by } = req.params;

        if (!created_by) {
            return res.status(400).json({ success: false, message: "'created_by' parameter is required." });
        }

        const getProjectsByCreatedByQuery = `
           SELECT 
              addproject.*, 
              users.name AS created_by_name 
          FROM addproject  
          LEFT JOIN users ON addproject.created_by = users.id 
          WHERE addproject.created_by = ?
          ORDER BY addproject.created_at DESC
        `;

        db.query(getProjectsByCreatedByQuery, [created_by], (err, results) => {
            if (err) {
                console.error("Error fetching projects by created_by:", err);
                return res.status(500).json({ success: false, message: "Database error", error: err });
            }

            res.status(200).json({ success: true, data: results });
        });
    } catch (error) {
        console.error("API error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


exports.addProject = (req, res) => {
    const {
        lead_id,
        builderName,
        projectName,
        location,
        panCardNumber,
        totalUnits,
        unitsForAgreements,
        projectCompletionStatus,
        contractSignedDate,
        contractNumber,
        contactPersonName,
        contactEmail,
        contactPhone,
        created_by
    } = req.body;

    if (!lead_id || !builderName || !projectName || !contactPersonName || !contactEmail || !contactPhone || !created_by) {
        return res.status(400).json({ success: false, message: "All required fields must be provided." });
    }

    // Generate project_id dynamically
    const getProjectIdQuery = `SELECT project_id FROM addproject ORDER BY created_at DESC LIMIT 1`;

    db.query(getProjectIdQuery, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Database error", error: err });
        }

        let newProjectId = "P-000001"; // Default if no records exist
        if (result.length > 0) {
            const lastProjectId = result[0].project_id;
            const lastNumber = parseInt(lastProjectId.split("-")[1]); // Extract numeric part
            newProjectId = `P-${String(lastNumber + 1).padStart(6, "0")}`; // Increment and format
        }

        const createdAt = new Date();

        // Insert into database
        const insertQuery = `INSERT INTO addproject 
            (project_id, lead_id, builder_name, project_name, location, pan_card_number, total_units, 
            units_for_agreements, project_completion_status, contract_signed_date, contract_number, 
            contact_person_name, contact_email, contact_phone, created_by, created_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            newProjectId, lead_id, builderName, projectName, location, panCardNumber, totalUnits,
            unitsForAgreements, projectCompletionStatus, contractSignedDate, contractNumber,
            contactPersonName, contactEmail, contactPhone, created_by, createdAt
        ];

        db.query(insertQuery, values, (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, message: "Database error", error: err });
            }

            res.status(201).json({ success: true, message: "Project added successfully", projectId: newProjectId });
        });
    });
};

exports.updateProject = (req, res) => {
    try {
        const { project_id } = req.params;
        const {
            builder_name,
            project_name,
            location,
            pan_card_number,
            total_units,
            units_for_agreements,
            project_completion_status,
            contract_signed_date,
            contract_number,
            contact_person_name,
            contact_email,
            contact_phone,
            created_by,
            submitted_by_cm  // ✅ New field
        } = req.body;

        console.log(req.body);
        

        if (!project_id) {
            return res.status(400).json({ error: "Project ID is required" });
        }

        const updateQuery = `
            UPDATE addproject 
            SET 
                builder_name = ?,
                project_name = ?,
                location = ?,
                pan_card_number = ?,
                total_units = ?,
                units_for_agreements = ?,
                project_completion_status = ?,
                contract_signed_date = ?,
                contract_number = ?,
                contact_person_name = ?,
                contact_email = ?,
                contact_phone = ?,
                created_by = ?,
                submitted_by_cm = ?,   -- ✅ Updated field
                updated_at = NOW()
            WHERE project_id = ?
        `;

        const values = [
            builder_name, project_name, location, pan_card_number,
            total_units, units_for_agreements, project_completion_status,
            contract_signed_date, contract_number, contact_person_name,
            contact_email, contact_phone, created_by, submitted_by_cm, project_id
        ];

        db.execute(updateQuery, values, (err, result) => {
            if (err) {
                console.error("Error updating project:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            if (result.affectedRows > 0) {
                res.status(200).json({ message: "Project details updated successfully" });
            } else {
                res.status(404).json({ error: "Project not found" });
            }
        });

    } catch (error) {
        console.error("Error updating project:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};






