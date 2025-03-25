const pool = require("../config/db");

// Create a new agreement resubmission entry
exports.createAgreementResubmission = (req, res) => {
    const { srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, updated_remark, created_by } = req.body;

    const query = `
        INSERT INTO agreement_resubmission (srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, updated_remark, created_by)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    pool.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        connection.query(query, [srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, updated_remark, created_by], (error, results) => {
            connection.release();
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(201).json({ message: "Agreement resubmission created successfully", id: results.insertId });
        });
    });
};

// Get all agreement resubmissions
exports.getAllAgreementResubmissions = (req, res) => {
    const query = "SELECT * FROM agreement_resubmission ORDER BY created_at DESC";

    pool.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        connection.query(query, (error, results) => {
            connection.release();
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(200).json(results);
        });
    });
};

// Update an agreement resubmission entry by ID
exports.updateAgreementResubmission = (req, res) => {
    const { id } = req.params;
    const { srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, updated_remark } = req.body;

    const query = `
        UPDATE agreement_resubmission 
        SET srn = ?, draft_type = ?, client_name = ?, assigned_by = ?, date = ?, tat = ?, 
            current_status = ?, resubmission_remark = ?, updated_remark = ?, updated_at = NOW() 
        WHERE id = ?
    `;

    pool.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        connection.query(query, [srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, updated_remark, id], (error, results) => {
            connection.release();
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(200).json({ message: "Agreement resubmission updated successfully" });
        });
    });
};
