const db = require("../config/db");


exports.getCompletedProjectsForAgreement = (req, res) => {
    const sql = "SELECT * FROM addproject";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Database error", error: err });
        }
        res.status(200).json({ success: true, projects: result });
    });
};


exports.getProjectIdSubmitedByClientManager = (req, res) => {
  const sql = "SELECT * FROM addproject WHERE submitted_by_cm = 1";

  db.query(sql, (err, result) => {
      if (err) {
          return res.status(500).json({ success: false, message: "Database error", error: err });
      }
      res.status(200).json({ success: true, projects: result });
  });
};



// exports.addNewAgreement = (req, res) => {
//   const {
//     project_id,
//     project_name,
//     location,
//     project_full_name,
//     phase,
//     building,
//     unit_type,
//     authority_approval,
//     tat,
//     agreement_type,
//     created_by,
//     remark // Adding the remark field
//   } = req.body;

//   console.log("Received project_id:", project_id); // Check if the project_id is being passed

//   // Check if the project_id already exists in the newagreement table
//   const checkQuery = `SELECT COUNT(*) AS count FROM newagreement WHERE project_id = ?`;

//   db.query(checkQuery, [project_id], (err, result) => {
//     if (err) {
//       console.error("Error checking for existing project_id:", err);
//       return res.status(500).json({ success: false, message: "Database error", error: err });
//     }

//     // If project_id already exists, send a message back
//     if (result[0].count > 0) {
//       return res.status(400).json({ success: false, message: "Project ID already exists in the database" });
//     }

//     // Proceed to insert the new agreement if project_id is not duplicated
//     const query = `
//       INSERT INTO newagreement (
//         project_id, project_name, location, project_full_name, phase, building, unit_type, 
//         authority_approval, tat, agreement_type, created_by, status, drafted_by, remark
//       )
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//     const values = [
//       project_id,
//       project_name,
//       location,
//       project_full_name,
//       phase,
//       building,
//       unit_type,
//       authority_approval,
//       tat,
//       agreement_type,
//       created_by,
//       'pending',  // Default value for 'status'
//       'not assigned yet',  // Default value for 'drafted_by'
//       remark || 'no remark'  // Default value for 'remark' if not provided
//     ];

//     db.query(query, values, (err, result) => {
//       if (err) {
//         console.error("Error adding new agreement:", err);
//         return res.status(500).json({ success: false, message: "Database error", error: err });
//       }

//       res.status(201).json({ success: true, message: "Agreement added successfully" });
//     });
//   });
// };

exports.addNewAgreement = (req, res) => {
  const {
    project_id,
    project_name,
    location,
    project_full_name,
    phase,
    building,
    unit_type,
    authority_approval,
    tat,
    agreement_type,
    created_by,
    remark // Adding the remark field
  } = req.body;

  console.log("Received project_id:", project_id); // Check if the project_id is being passed

  // Check if the project_id already exists in the newagreement table
  const checkQuery = `SELECT COUNT(*) AS count FROM newagreement WHERE project_id = ?`;

  db.query(checkQuery, [project_id], (err, result) => {
    if (err) {
      console.error("Error checking for existing project_id:", err);
      return res.status(500).json({ success: false, message: "Database error", error: err });
    }

    // If project_id already exists, send a message back
    if (result[0].count > 0) {
      return res.status(400).json({ success: false, message: "Project ID already exists in the database" });
    }

    // Fetch client_id from addproject where project_id matches
    const clientQuery = `SELECT client_id FROM addproject WHERE project_id = ?`;

    db.query(clientQuery, [project_id], (err, clientResult) => {
      if (err) {
        console.error("Error fetching client_id:", err);
        return res.status(500).json({ success: false, message: "Database error", error: err });
      }

      // If no matching project_id in addproject, set client_id as NULL
      const client_id = clientResult.length > 0 ? clientResult[0].client_id : null;

      // Proceed to insert the new agreement with the fetched client_id
      const insertQuery = `
        INSERT INTO newagreement (
          client_id, project_id, project_name, location, project_full_name, phase, building, unit_type, 
          authority_approval, tat, agreement_type, created_by, status, drafted_by, remark
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const values = [
        client_id,
        project_id,
        project_name,
        location,
        project_full_name,
        phase,
        building,
        unit_type,
        authority_approval,
        tat,
        agreement_type,
        created_by,
        'pending',  // Default value for 'status'
        'not assigned yet',  // Default value for 'drafted_by'
        remark || 'no remark'  // Default value for 'remark' if not provided
      ];

      db.query(insertQuery, values, (err, result) => {
        if (err) {
          console.error("Error adding new agreement:", err);
          return res.status(500).json({ success: false, message: "Database error", error: err });
        }

        res.status(201).json({ success: true, message: "Agreement added successfully" });
      });
    });
  });
};

  

exports.getAllAgreements = (req, res) => {
  try {
      const query = `
          SELECT 
              newagreement.*, 
              created_by_user.name AS created_by_name,
              drafted_by_user.name AS drafted_by_name
          FROM newagreement
          LEFT JOIN users AS created_by_user ON newagreement.created_by = created_by_user.id
          LEFT JOIN users AS drafted_by_user ON newagreement.drafted_by = drafted_by_user.id
          ORDER BY newagreement.created_at DESC
      `;

      db.query(query, (err, results) => {
          if (err) {
              console.error("Error fetching agreements:", err);
              return res.status(500).json({ success: false, message: "Database error", error: err });
          }

          res.status(200).json({ success: true, data: results });
      });
  } catch (error) {
      console.error("API error: ", error);
      res.status(500).json({ success: false, message: "Internal server error" });
  }
};



// exports.getAgreementsByCreatedBy = (req, res) => {
//   try {
//       const { created_by } = req.params;

//       if (!created_by) {
//           return res.status(400).json({ success: false, message: "'created_by' parameter is required." });
//       }

//       const query = `
//           SELECT 
//               newagreement.*, 
//               users.name AS created_by_name 
//           FROM newagreement
//           LEFT JOIN users ON newagreement.created_by = users.id 
//           WHERE newagreement.created_by = ?
//           ORDER BY newagreement.created_at DESC
//       `;

//       db.query(query, [created_by], (err, results) => {
//           if (err) {
//               console.error("Error fetching agreements by created_by:", err);
//               return res.status(500).json({ success: false, message: "Database error", error: err });
//           }

//           res.status(200).json({ success: true, data: results });
//       });
//   } catch (error) {
//       console.error("API error: ", error);
//       res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };


exports.getAgreementsByDraftedBy = (req, res) => {
  const { userId } = req.params; // Get drafted_by (assigned_to) from request parameters

  if (!userId) {
    return res.status(400).json({ message: "User ID (drafted_by) is required." });
  }

  // ✅ Fetch agreements where drafted_by (assigned_to) = userId and join assigned_by with users table
  const query = `
    SELECT 
      newagreement.*, 
      users.name AS assigned_by_name 
    FROM 
      newagreement 
    LEFT JOIN 
      users ON newagreement.assigned_by = users.id 
    WHERE 
      newagreement.drafted_by = ?`;

  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error("❌ Database Error:", error);
      return res.status(500).json({ message: "Server error", error });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No agreements found for this user." });
    }

    res.status(200).json(results);
  });
};


// exports.getAgreementsByCreatedBy = (req, res) => {
//   try {
//       const { created_by } = req.params;

//       if (!created_by) {
//           return res.status(400).json({ success: false, message: "'created_by' parameter is required." });
//       }

//       const query = `
//           SELECT 
//               newagreement.*, 
//               users.name AS created_by_name,
//               addproject.total_units 
//           FROM newagreement
//           LEFT JOIN users ON newagreement.created_by = users.id 
//           LEFT JOIN addproject ON newagreement.project_id = addproject.project_id
//           WHERE newagreement.created_by = ?
//           ORDER BY newagreement.created_at DESC
//       `;

//       db.query(query, [created_by], (err, results) => {
//           if (err) {
//               console.error("Error fetching agreements by created_by:", err);
//               return res.status(500).json({ success: false, message: "Database error", error: err });
//           }

//           res.status(200).json({ success: true, data: results });
//       });
//   } catch (error) {
//       console.error("API error: ", error);
//       res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };



exports.updateAgreement = (req, res) => {
  const { 
    project_name,
    phase,
    unit_type,
    remark,
    drafted_by,
    status, // Adding status field
    assigned_by // New field for assigned_by
  } = req.body;

  const { project_id } = req.params; // Get project_id from route params

  console.log("Received project_id:", project_id);

  // Validate the incoming data (Ensure project_id is provided)
  if (!project_id) {
    return res.status(400).json({ success: false, message: "Project ID is required" });
  }

  // Check if the project_id exists in the database
  const checkQuery = `SELECT COUNT(*) AS count FROM newagreement WHERE project_id = ?`;

  db.query(checkQuery, [project_id], (err, result) => {
    if (err) {
      console.error("Error checking for existing project_id:", err);
      return res.status(500).json({ success: false, message: "Database error", error: err });
    }

    if (result[0].count === 0) {
      return res.status(404).json({ success: false, message: "Project ID not found" });
    }

    // Proceed to update the agreement with the new values, including status
    const updateQuery = `
      UPDATE newagreement 
      SET 
        project_name = ?, 
        phase = ?, 
        unit_type = ?, 
        remark = ?, 
        drafted_by = ?, 
        status = ?, 
        assigned_by = ? 
      WHERE project_id = ?`;

    const values = [
      project_name || null,  // If no project_name is provided, set to null
      phase || null,         // If no phase is provided, set to null
      unit_type || null,     // If no unit_type is provided, set to null
      remark || 'no remark', // If no remark is provided, set to default 'no remark'
      drafted_by || null,    // If no drafted_by is provided, set to null
      status || 'pending',   // If no status is provided, set to default 'pending'
      assigned_by || null, 
      project_id             // Use project_id from the URL for updating
    ];

    db.query(updateQuery, values, (err, result) => {
      if (err) {
        console.error("Error updating agreement:", err);
        return res.status(500).json({ success: false, message: "Database error", error: err });
      }

      if (result.affectedRows > 0) {
        return res.status(200).json({ success: true, message: "Agreement updated successfully" });
      } else {
        return res.status(400).json({ success: false, message: "No changes made to the agreement" });
      }
    });
  });
};

  



exports.AgreementJrLawyer = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
  }

  // ✅ Fetch all rows where drafted_by = userId
  const query = `SELECT 
      newagreement.*, 
      users.name AS assigned_by_name 
    FROM 
      newagreement 
    LEFT JOIN 
      users ON newagreement.assigned_by = users.id 
    WHERE 
      newagreement.drafted_by = ? `;
// console.log(userId);


  db.query(query, [userId], (error, results) => {
      // console.log(results);
      
      if (error) {
          console.error("❌ Database Error:", error);
          return res.status(500).json({ message: "Server error", error });
      }

      if (results.length === 0) {
          return res.status(404).json({ message: "No agreements found for this user." });
      }

      res.status(200).json(results);
  });
};


exports.AddHocJrLawyer = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required." });
  }

  // ✅ Fetch all rows where assigned_to = userId and join assigned_by with users table
  const query = `
    SELECT 
      bdm_draft_req_ad_hoc.*, 
      users.name AS assigned_by_name 
    FROM 
      bdm_draft_req_ad_hoc 
    LEFT JOIN 
      users ON bdm_draft_req_ad_hoc.assigned_by = users.id 
    WHERE 
      bdm_draft_req_ad_hoc.assigned_to = ?`;

  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error("❌ Database Error:", error);
      return res.status(500).json({ message: "Server error", error });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No agreements found for this user." });
    }

    res.status(200).json(results);
  });
};

exports.fetchRedoAddHocs = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required." });
  }

  // ✅ Fetch agreements where status is 'Re-do' and assigned_to = userId
  const query = `
    SELECT 
      bdm_draft_req_ad_hoc.*, 
      users.name AS assigned_by_name 
    FROM 
      bdm_draft_req_ad_hoc 
    LEFT JOIN 
      users ON bdm_draft_req_ad_hoc.assigned_by = users.id 
    WHERE 
      bdm_draft_req_ad_hoc.assigned_to = ? 
      AND bdm_draft_req_ad_hoc.status = 'Re-do'`;

  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error("❌ Database Error:", error);
      return res.status(500).json({ message: "Server error", error });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No 'Re-do' agreements found for this user." });
    }

    res.status(200).json(results);
  });
};


exports.fetchRedoProjectAgreements = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required." });
  }

  // ✅ Fetch agreements where status is 'Re-do' and assigned_to = userId
  const query = `
    SELECT 
      newagreement.*, 
      users.name AS assigned_by_name 
    FROM 
      newagreement 
    LEFT JOIN 
      users ON newagreement.assigned_by = users.id 
    WHERE 
      newagreement.drafted_by = ? 
      AND newagreement.status = 'Re-do'`;

  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error("❌ Database Error:", error);
      return res.status(500).json({ message: "Server error", error });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No 'Re-do' agreements found for this user." });
    }

    res.status(200).json(results);
  });
};

