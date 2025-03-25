const db = require("../config/db");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const transporter = require('../config/mailTransporter');
require('dotenv').config();

const sendContractedEmail = async (email, contact_person, project_name, plainPassword) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Your email from .env
        to: email,
        subject: "Your Lead is Now Contracted!",
        text: `Dear ${contact_person},\n\nYour project '${project_name}' has been contracted successfully.\n\nHere are your login credentials:\nEmail: ${email}\nPassword: ${plainPassword}\n\nBest Regards,\nYour Company Name`
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully: ", info.response);
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return { success: false, message: "Failed to send email", error };
    }
};



// exports.bdmDraftReqAdHocController = (req, res) => {
//   try {
//     const {
//       clientName,
//       email,
//       phone,
//       agreementType,
//       otherSpecs,
//       remark,
//       tat,
//       created_by,
//     } = req.body;

//     // Validate required fields
//     if (!clientName || !email || !phone || !agreementType || !tat || !created_by) {
//       return res.status(400).json({
//         success: false,
//         message: "All required fields must be provided.",
//       });
//     }

//     // Step 1: Fetch last client_id
//     const fetchLastClientIdQuery = `SELECT client_id FROM bdm_draft_req_ad_hoc ORDER BY id DESC LIMIT 1`;

//     db.query(fetchLastClientIdQuery, (err, clientResult) => {
//       if (err) {
//         console.error("Error fetching last client_id: ", err);
//         return res.status(500).json({ success: false, message: "Database error", error: err });
//       }

//       let newClientId = "CID10001"; // Default first Client ID

//       if (clientResult.length > 0 && clientResult[0].client_id) {
//         let lastClientId = clientResult[0].client_id;
//         let lastNumber = parseInt(lastClientId.replace(/\D/g, '')) || 10000; // Extract numeric part safely
//         newClientId = `CID${(lastNumber + 1).toString().padStart(5, "0")}`;
//       }

//       // Step 2: Fetch last ARN and generate a new one
//       const fetchLastArnQuery = `SELECT arn FROM bdm_draft_req_ad_hoc ORDER BY id DESC LIMIT 1`;

//       db.query(fetchLastArnQuery, (err, arnResult) => {
//         if (err) {
//           console.error("Error fetching last ARN: ", err);
//           return res.status(500).json({ success: false, message: "Database error", error: err });
//         }

//         let newArn = "ARN-100001"; // Default first ARN

//         if (arnResult.length > 0 && arnResult[0].arn) {
//           let lastArn = arnResult[0].arn;
//           let lastNumber = parseInt(lastArn.split('-')[1]) || 100000; // Extract numeric part safely

//           // Ensure we don't get NaN
//           if (!isNaN(lastNumber)) {
//             newArn = `ARN-${(lastNumber + 1)}`;
//           }
//         }

//         console.log(`✅ Generated ARN: ${newArn}`);
//         console.log(`✅ Generated Client ID: ${newClientId}`);

//         // Step 3: Insert new draft request with generated client_id and arn
//         const insertDraftQuery = `INSERT INTO bdm_draft_req_ad_hoc 
//                             (client_id, arn, client_name, email, phone, agreement_type, other_specs, remark, tat, created_by) 
//                             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//         const values = [
//           newClientId, // ✅ Auto-generated Client ID
//           newArn, // ✅ Auto-generated ARN (Fixed NaN issue)
//           clientName,
//           email,
//           phone,
//           agreementType,
//           otherSpecs,
//           remark,
//           tat,
//           created_by,
//         ];

//         db.query(insertDraftQuery, values, (err, result) => {
//           if (err) {
//             console.error("Error inserting data: ", err);
//             return res.status(500).json({ success: false, message: "Database error", error: err });
//           }

//           res.status(201).json({
//             success: true,
//             message: "Draft request added successfully",
//             client_id: newClientId,
//             arn: newArn,
//           });
//         });
//       });
//     });
//   } catch (error) {
//     console.error("API error: ", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };




// Function to generate a random password
function generateRandomPassword(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

exports.bdmDraftReqAdHocController = async (req, res) => {
  try {
      const {
          clientName,
          email,
          phone,
          agreementType,
          otherSpecs,
          remark,
          tat,
          created_by,
          draft_type
      } = req.body;

      // Validate required fields
      if (!clientName || !email || !phone || !agreementType || !tat || !created_by || !draft_type) {
          return res.status(400).json({
              success: false,
              message: "All required fields must be provided.",
          });
      }

      // Check if user already exists
      const checkUserQuery = `SELECT user_id FROM users WHERE email = ?`;
      db.query(checkUserQuery, [email], (err, userResult) => {
          if (err) {
              console.error("Error checking user existence: ", err);
              return res.status(500).json({ success: false, message: "Database error", error: err });
          }

          let existingUserId = userResult.length > 0 ? userResult[0].user_id : null;

          if (!existingUserId) {
              // If user does not exist, create a new one
              const fetchLastUserQuery = `SELECT user_id FROM users ORDER BY id DESC LIMIT 1`;
              db.query(fetchLastUserQuery, (err, lastUserResult) => {
                  if (err) {
                      console.error("Error fetching last user_id: ", err);
                      return res.status(500).json({ success: false, message: "Database error", error: err });
                  }

                  let newUserId = "JPU-00001"; // Default user ID
                  if (lastUserResult.length > 0 && lastUserResult[0].user_id) {
                      let lastUserId = lastUserResult[0].user_id;
                      let lastNumber = parseInt(lastUserId.split('-')[1]) || 0;
                      newUserId = `JPU-${String(lastNumber + 1).padStart(5, '0')}`;
                  }

                  // Generate a random password
                  const plainPassword = generateRandomPassword(8);
                  const encryptedPassword = bcrypt.hashSync(plainPassword, 10);

                  // Insert new user
                  const insertUserQuery = `INSERT INTO users 
                                          (user_id, name, email, password, role_id, mobile, company_id, created_by) 
                                          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

                  const userValues = [newUserId, clientName, email, encryptedPassword, 2, phone, null, created_by];

                  db.query(insertUserQuery, userValues, (err, userInsertResult) => {
                      if (err) {
                          console.error("Error inserting user: ", err);
                          return res.status(500).json({ success: false, message: "Database error", error: err });
                      }

                      // Send Email with Credentials using `sendContractedEmail`
                      sendContractedEmail(email, clientName, agreementType, plainPassword);

                      // Now Insert into `bdm_draft_req_ad_hoc`
                      insertDraftRecord(newUserId, res); // Pass res to avoid multiple responses
                  });
              });
          } else {
              // If user exists, directly proceed with inserting draft record
              insertDraftRecord(existingUserId, res);
          }
      });

      // Function to insert draft request
      function insertDraftRecord(userId, res) {
          // Fetch last ARN
          const fetchLastArnQuery = `SELECT arn FROM bdm_draft_req_ad_hoc ORDER BY id DESC LIMIT 1`;

          db.query(fetchLastArnQuery, (err, arnResult) => {
              if (err) {
                  console.error("Error fetching last ARN: ", err);
                  return res.status(500).json({ success: false, message: "Database error", error: err });
              }

              let newArn = "ARN-100001"; // Default first ARN
              if (arnResult.length > 0 && arnResult[0].arn) {
                  let lastArn = arnResult[0].arn;
                  let lastNumber = parseInt(lastArn.split('-')[1]) || 100000;
                  newArn = `ARN-${(lastNumber + 1)}`;
              }

              console.log(`✅ Generated ARN: ${newArn}`);

              // Insert new draft request
              const insertDraftQuery = `INSERT INTO bdm_draft_req_ad_hoc 
                                  (client_id, arn, client_name, email, phone, agreement_type, other_specs, remark, tat, created_by, draft_type) 
                                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

              const values = [
                  userId, newArn, clientName, email, phone, agreementType, otherSpecs, remark, tat, created_by, draft_type
              ];

              db.query(insertDraftQuery, values, (err, draftResult) => {
                  if (err) {
                      console.error("Error inserting draft request: ", err);
                      return res.status(500).json({ success: false, message: "Database error", error: err });
                  }

                  res.status(201).json({
                      success: true,
                      message: "Draft request added successfully",
                      client_id: userId,
                      arn: newArn,
                      emailSent: true
                  });
              });
          });
      }
  } catch (error) {
      console.error("API error: ", error);
      res.status(500).json({ success: false, message: "Internal server error" });
  }
};





// GET API - Fetch All Data with Created By and Assigned To Names
exports.getDraftRequests = (req, res) => {
  try {
    const fetchQuery = `
      SELECT 
          bdm.*, 
          users.name AS created_by_name,
          assigned_users.name AS assigned_to_name 
      FROM bdm_draft_req_ad_hoc bdm
      LEFT JOIN users ON bdm.created_by = users.id 
      LEFT JOIN users AS assigned_users ON bdm.assigned_to = assigned_users.id 
      ORDER BY bdm.created_at DESC
    `;

    db.query(fetchQuery, (err, results) => {
      if (err) {
        console.error("Error fetching data: ", err);
        return res.status(500).json({ success: false, message: "Database error", error: err });
      }

      res.status(200).json({ success: true, data: results });
    });
  } catch (error) {
    console.error("API error: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};



// GET API - Fetch Data by Created By Parameter
exports.getDraftRequestsByCreatedBy = (req, res) => {
  try {
    const { created_by } = req.params;

    if (!created_by) {
      return res.status(400).json({ success: false, message: "'created_by' parameter is required." });
    }

    const fetchQuery = `
      SELECT 
          bdm.*, 
          users.name AS created_by_name,
          assigned_users.name AS assigned_to_name 
      FROM bdm_draft_req_ad_hoc bdm
      LEFT JOIN users ON bdm.created_by = users.id 
      LEFT JOIN users AS assigned_users ON bdm.assigned_to = assigned_users.id 
      WHERE bdm.created_by = ?
      ORDER BY bdm.created_at DESC
    `;

    db.query(fetchQuery, [created_by], (err, results) => {
      if (err) {
        console.error("Error fetching data by created_by: ", err);
        return res.status(500).json({ success: false, message: "Database error", error: err });
      }

      res.status(200).json({ success: true, data: results });
    });
  } catch (error) {
    console.error("API error: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};



exports.updateDraftByClientId = (req, res) => {
  try {
    const { id } = req.params; // Get client_id from URL params
    const { client_name, tat, draft_type, assigned_to, status, remark, assigned_by } = req.body;

    if (!client_name && !tat && !draft_type && !assigned_to && !status && remark === undefined && !assigned_by) {
      return res.status(400).json({ success: false, message: "At least one field is required for update." });
    }

    let updateFields = [];
    let values = [];

    // ✅ Only update fields that exist in the database
    if (client_name) {
      updateFields.push("client_name = ?");
      values.push(client_name);
    }
    if (tat) {
      updateFields.push("tat = ?");
      values.push(tat);
    }
    if (draft_type) {
      updateFields.push("draft_type = ?");
      values.push(draft_type);
    }
    if (assigned_to) {
      updateFields.push("assigned_to = ?");
      values.push(assigned_to);
    }
    if (status) {
      updateFields.push("status = ?");
      values.push(status);
    }
    if (remark !== undefined) { // Remark is optional
      updateFields.push("remark = ?");
      values.push(remark);
    }
    if (assigned_by) { // Store who assigned the task
      updateFields.push("assigned_by = ?");
      values.push(assigned_by);
    }

    // ✅ Prevent SQL error if all fields are missing
    if (updateFields.length === 0) {
      return res.status(400).json({ success: false, message: "No valid fields provided for update." });
    }

    // ✅ Construct the update query
    const sql = `UPDATE bdm_draft_req_ad_hoc SET ${updateFields.join(", ")}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    values.push(id);

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error updating draft request:", err);
        return res.status(500).json({ success: false, message: "Database error", error: err });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, message: "Draft request not found" });
      }

      res.status(200).json({ success: true, message: "Draft request updated successfully" });
    });
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// Update only status and remark based on ID
exports.updateAddHocStatusByJrLawyer = (req, res) => {
    const { id, status, remark } = req.body;

    if (!id || !status || !remark) {
        return res.status(400).json({ error: "ID, Status, and Remark are required" });
    }

    const query = `
        UPDATE bdm_draft_req_ad_hoc 
        SET status = ?, remark = ?, updated_at = CURRENT_TIMESTAMP 
        WHERE id = ?`;

    db.query(query, [status, remark, id], (err, result) => {
        if (err) {
            console.error("Error updating agreement:", err);
            return res.status(500).json({ error: "Database update failed" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "No record found with given ID" });
        }

        return res.status(200).json({ message: "Agreement updated successfully" });
    });
};


// Update only status and remark based on ID
exports.updateProjectAgreementsByJrLawyer = (req, res) => {
  const { id, status, remark } = req.body;

  if (!id || !status || !remark) {
      return res.status(400).json({ error: "ID, Status, and Remark are required" });
  }

  const query = `
      UPDATE  newagreement 
      SET status = ?, remark = ?, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ?`;

  db.query(query, [status, remark, id], (err, result) => {
      if (err) {
          console.error("Error updating agreement:", err);
          return res.status(500).json({ error: "Database update failed" });
      }

      if (result.affectedRows === 0) {
          return res.status(404).json({ error: "No record found with given ID" });
      }

      return res.status(200).json({ message: "Agreement updated successfully" });
  });
};






