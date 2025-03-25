const pool = require("../config/db");

// 📌 Create a new agreement (POST)
exports.createAgreementRegistered = (req, res) => {
    const { client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_date, registration_number, created_by, status } = req.body;

    const sql = `INSERT INTO agreement_registered 
        (client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_date, registration_number, created_by, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    pool.query(sql, [client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_date, registration_number, created_by, status],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Database error", error: err });
            }
            res.status(201).json({ message: "Agreement registered successfully", id: result.insertId });
        }
    );
};

// 📌 Fetch all agreements (GET)
exports.getAgreementsRegistered = (req, res) => {
    const sql = "SELECT * FROM agreement_registered";

    pool.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error", error: err });
        }
        res.status(200).json(results);
    });
};

// 📌 Update agreement by ID (PUT)
exports.updateAgreementRegistered = (req, res) => {
    const { id } = req.params;
    const { client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_date, registration_number, status } = req.body;

    const sql = `UPDATE agreement_registered 
        SET client_id=?, arn=?, name=?, project=?, unit=?, agreement_value=?, stamp_duty=?, registration_date=?, registration_number=?, status=?
        WHERE id=?`;

    pool.query(sql, [client_id, arn, name, project, unit, agreement_value, stamp_duty, registration_date, registration_number, status, id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Database error", error: err });
            }
            res.status(200).json({ message: "Agreement updated successfully" });
        }
    );
};
