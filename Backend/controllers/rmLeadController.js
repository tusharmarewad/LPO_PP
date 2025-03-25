const db = require("../config/db");

// Create a new lead
exports.addLead = (req, res) => {
  const { name, mobile, email, type, createdBy } = req.body;
  // Validation
  if (!name || !mobile || !email || !type || !createdBy) {
    return res.status(400).json({ error: "All fields are required" });
  }
  // SQL Query to Insert Data
  const sql = "INSERT INTO RmAddLead (name, mobile, email, type, createdBy, status, remark) VALUES (?, ?, ?, ?, ?, 'Pending', 'No Remarks')";
  db.query(sql, [name, mobile, email, type, createdBy], (err, result) => {
    if (err) {
      console.error("❌ Error inserting lead:", err);
      return res.status(500).json({ error: "Database Insertion Failed" });
    }
    res.status(201).json({
      message: "Lead created successfully",
      data: {
        id: result.insertId,
        name,
        mobile,
        email,
        type,
        createdBy,
      },
    });
  });
};






// Fetch all leads
exports.getLeads = (req, res) => {
  // SQL Query to fetch data
  const sql = "SELECT * FROM RmAddLead";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching leads:", err);
      return res.status(500).json({ error: "Database Fetching Failed" });
    }

    res.status(200).json({
      message: "Leads retrieved successfully",
      data: results,
    });
  });
};


// Update Lead Status by ID (Using URL Parameter)
exports.updateLeadStatus = (req, res) => {
  const { status } = req.body;
  const { id } = req.params; // Get ID from URL
  // Validation
  if (!id || !status) {
    return res.status(400).json({ error: "Lead ID and Status are required" });
  }
  // SQL Query to Update Status
  const sql = "UPDATE RmAddLead SET status = ? WHERE id = ?";
  db.query(sql, [status, id], (err, result) => {
    if (err) {
      console.error("❌ Error updating lead status:", err);
      return res.status(500).json({ error: "Database Update Failed" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Lead not found" });
    }
    res.status(200).json({
      message: "Lead status updated successfully",
      data: {
        id,
        status,
      },
    });
  });
};


