const pool = require("../config/db");

// Create a new agreement review
exports.createAgreementReview = (req, res) => {
    const { client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_fees, prepared_by, pdf, tat, status, created_by } = req.body;

    const query = `
        INSERT INTO agreement_review (client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_fees, prepared_by, pdf, tat, status, created_by)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    pool.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        connection.query(query, [client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_fees, prepared_by, pdf, tat, status, created_by], (error, results) => {
            connection.release();
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(201).json({ message: "Agreement review added successfully", id: results.insertId });
        });
    });
};

// Get all agreement reviews
exports.getAllAgreementReviews = (req, res) => {
    const query = "SELECT * FROM agreement_review ORDER BY created_at DESC";

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

// Update an agreement review by ID
exports.updateAgreementReview = (req, res) => {
    const { id } = req.params;
    const { client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_fees, prepared_by, pdf, tat, status } = req.body;

    const query = `
        UPDATE agreement_review 
        SET client_id = ?, arn = ?, name = ?, project = ?, unit = ?, agreement_value = ?, 
            stamp_duty = ?, registration_fees = ?, prepared_by = ?, pdf = ?, tat = ?, status = ?, updated_at = NOW() 
        WHERE id = ?
    `;

    pool.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        connection.query(query, [client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_fees, prepared_by, pdf, tat, status, id], (error, results) => {
            connection.release();
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(200).json({ message: "Agreement review updated successfully" });
        });
    });
};
