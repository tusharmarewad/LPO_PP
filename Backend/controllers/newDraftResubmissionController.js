const pool = require("../config/db");

// 📌 Create a new draft resubmission (POST)
exports.createDraftResubmission = (req, res) => {
    const { srn, draft_type, client_name, assigned_by, date, tat, resubmission_remark, update_remark, created_by } = req.body;

    const sql = `INSERT INTO new_draft_resubmission 
        (srn, draft_type, client_name, assigned_by, date, tat, resubmission_remark, update_remark, created_by) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    pool.query(sql, [srn, draft_type, client_name, assigned_by, date, tat, resubmission_remark, update_remark, created_by],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Database error", error: err });
            }
            res.status(201).json({ message: "Draft resubmission created successfully", id: result.insertId });
        }
    );
};

// 📌 Fetch all draft resubmissions (GET)
exports.getDraftResubmissions = (req, res) => {
    const sql = "SELECT * FROM new_draft_resubmission";

    pool.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error", error: err });
        }
        res.status(200).json(results);
    });
};

// 📌 Update draft resubmission by ID (PUT)
exports.updateDraftResubmission = (req, res) => {
    const { id } = req.params;
    const { srn, draft_type, client_name, assigned_by, date, tat, resubmission_remark, update_remark } = req.body;

    const sql = `UPDATE new_draft_resubmission 
        SET srn=?, draft_type=?, client_name=?, assigned_by=?, date=?, tat=?, resubmission_remark=?, update_remark=?
        WHERE id=?`;

    pool.query(sql, [srn, draft_type, client_name, assigned_by, date, tat, resubmission_remark, update_remark, id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Database error", error: err });
            }
            res.status(200).json({ message: "Draft resubmission updated successfully" });
        }
    );
};
