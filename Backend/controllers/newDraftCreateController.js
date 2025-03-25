const pool = require("../config/db");

// 📌 Create a new draft (POST)
exports.createDraft = (req, res) => {
    const { srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, update_remark, created_by } = req.body;

    const sql = `INSERT INTO new_draft_create 
        (srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, update_remark, created_by) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    pool.query(sql, [srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, update_remark, created_by],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Database error", error: err });
            }
            res.status(201).json({ message: "Draft created successfully", id: result.insertId });
        }
    );
};

// 📌 Fetch all drafts (GET)
exports.getDrafts = (req, res) => {
    const sql = "SELECT * FROM new_draft_create";

    pool.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error", error: err });
        }
        res.status(200).json(results);
    });
};

// 📌 Update draft by ID (PUT)
exports.updateDraft = (req, res) => {
    const { id } = req.params;
    const { srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, update_remark } = req.body;

    const sql = `UPDATE new_draft_create 
        SET srn=?, draft_type=?, client_name=?, assigned_by=?, date=?, tat=?, current_status=?, resubmission_remark=?, update_remark=?
        WHERE id=?`;

    pool.query(sql, [srn, draft_type, client_name, assigned_by, date, tat, current_status, resubmission_remark, update_remark, id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Database error", error: err });
            }
            res.status(200).json({ message: "Draft updated successfully" });
        }
    );
};
