const db = require("../config/db");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const transporter = require('../config/mailTransporter');
require('dotenv').config();

const sendContractedEmail = (email, contact_person, project_name, plainPassword) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Your email from .env
    to: email, 
    subject: "Your Lead is Now Contracted!",
    text: `Dear ${contact_person},\n\nYour project '${project_name}' has been contracted successfully.\n\nHere are your login credentials:\nEmail: ${email}\nPassword: ${plainPassword}\n\nBest Regards,\nYour Company Name`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


// Helper function to generate a random password
function generateRandomPassword(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

exports.getAllLeads = (req, res) => {
  try {
    const sql = `
      SELECT 
          addlead.*, 
          users.name AS created_by_name 
      FROM addlead 
      LEFT JOIN users ON addlead.created_by = users.id 
      ORDER BY addlead.created_at DESC
    `;
    db.query(sql, (err, results) => {
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

exports.getLeadsByCreatedBy = (req, res) => {
  try {
    const { created_by } = req.params;
    if (!created_by) {
      return res.status(400).json({
        success: false,
        message: "Parameter 'created_by' is required.",
      });
    }

    const sql = `
      SELECT 
        addlead.*, 
        users.name AS created_by_name
      FROM addlead
      LEFT JOIN users ON addlead.created_by = users.id
      WHERE addlead.created_by = ? 
      ORDER BY addlead.created_at DESC`;

    db.query(sql, [created_by], (err, results) => {
      if (err) {
        console.error("Error fetching data: ", err);
        return res.status(500).json({ success: false, message: "Database error", error: err });
      }
      if (results.length === 0) {
        return res.status(404).json({ success: false, message: "No leads found for this user." });
      }
      res.status(200).json({ success: true, data: results });
    });
  } catch (error) {
    console.error("API error: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.getLeadById = (req, res) => {
  try {
    const { id } = req.params;
    const sql = "SELECT * FROM addlead WHERE id = ?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        console.error("Error fetching data: ", err);
        return res.status(500).json({ success: false, message: "Database error", error: err });
      }
      if (results.length === 0) {
        return res.status(404).json({ success: false, message: "Lead not found" });
      }
      res.status(200).json({ success: true, data: results[0] });
    });
  } catch (error) {
    console.error("API error: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


exports.addLead = async (req, res) => {
  try {
    const {
      builder_name,
      project_name,
      contact_person,
      email_id,
      phone_no,
      address_1,
      location,
      city,
      state,
      pincode,
      no_of_units,
      project_completion_status,
      status,
      created_by,
    } = req.body;

    if (!builder_name || !project_name || !contact_person || !email_id || !phone_no || !city || !state) {
      return res.status(400).json({ success: false, message: "All required fields must be provided." });
    }

    if (!created_by) {
      return res.status(400).json({ success: false, message: "'created_by' is required." });
    }

    const checkLeadExistsQuery = `SELECT lead_id FROM addlead WHERE builder_name = ? AND project_name = ? AND location = ?`;
    db.query(checkLeadExistsQuery, [builder_name, project_name, location], (err, leadResult) => {
      if (err) return res.status(500).json({ success: false, message: "Database error", error: err });
      if (leadResult.length > 0) {
        return res.status(400).json({ success: false, message: "Lead already exists.", lead_id: leadResult[0].lead_id });
      }

      const fetchLastLeadQuery = `SELECT lead_id FROM addlead ORDER BY id DESC LIMIT 1`;
      db.query(fetchLastLeadQuery, (err, result) => {
        if (err) return res.status(500).json({ success: false, message: "Database error", error: err });

        let newLeadId = "LD10001";
        if (result.length > 0) {
          let lastLeadId = result[0].lead_id;
          let lastNumber = parseInt(lastLeadId.substring(2));
          newLeadId = `LD${(lastNumber + 1).toString().padStart(5, "0")}`;
        }

        const insertLeadQuery = `
          INSERT INTO addlead 
          (builder_name, project_name, contact_person, email_id, phone_no, address_1, location, city, state, pincode, no_of_units, project_completion_status, status, lead_id, created_by, created_at) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
        `;
        const leadValues = [builder_name, project_name, contact_person, email_id, phone_no, address_1, location, city, state, pincode, no_of_units, project_completion_status, status, newLeadId, created_by];

        db.query(insertLeadQuery, leadValues, (err, leadInsertResult) => {
          if (err) return res.status(500).json({ success: false, message: "Database error", error: err });

          if (status === "Contracted") {
            const assignedTo = created_by || 1;
            const insertCompanyQuery = `INSERT INTO company (name, assign_to, created_by, created_at) VALUES (?, ?, ?, NOW())`;

            db.query(insertCompanyQuery, [builder_name, assignedTo, created_by], (err, companyResult) => {
              if (err) return res.status(500).json({ success: false, message: "Database error", error: err });

              const companyId = companyResult.insertId;

              const generateUniqueUserId = (callback) => {
                const getLastUserIdQuery = `SELECT user_id FROM users ORDER BY created_at DESC LIMIT 1`;
                db.query(getLastUserIdQuery, (err, lastUserResult) => {
                  if (err) return callback(err);

                  let newUserId = "JPU-00001";
                  if (lastUserResult.length > 0) {
                    let lastUserId = lastUserResult[0].user_id;
                    let lastNumber = parseInt(lastUserId.split("-")[1]);
                    newUserId = `JPU-${String(lastNumber + 1).padStart(5, "0")}`;
                  }

                  const checkUserIdQuery = `SELECT user_id FROM users WHERE user_id = ?`;
                  db.query(checkUserIdQuery, [newUserId], (err, checkResult) => {
                    if (err) return callback(err);
                    if (checkResult.length > 0) {
                      generateUniqueUserId(callback); // Recursively generate a new ID if it already exists
                    } else {
                      callback(null, newUserId);
                    }
                  });
                });
              };

              generateUniqueUserId((err, newUserId) => {
                if (err) return res.status(500).json({ success: false, message: "Database error", error: err });

                const plainPassword = generateRandomPassword(8);
                const encryptedPassword = bcrypt.hashSync(plainPassword, 10);
                const insertUserQuery = `
                  INSERT INTO users 
                  (user_id, name, email, password, role_id, mobile, company_id, created_by, created_at)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
                `;

                db.query(insertUserQuery, [newUserId, contact_person, email_id, encryptedPassword, 15, phone_no, companyId, created_by], (err, userResult) => {
                  if (err) return res.status(500).json({ success: false, message: "Database error", error: err });

                  const getLastProjectIdQuery = `SELECT project_id FROM addproject ORDER BY created_at DESC LIMIT 1`;
                  db.query(getLastProjectIdQuery, (err, lastProjectResult) => {
                    if (err) return res.status(500).json({ success: false, message: "Database error", error: err });

                    let newProjectId = "PJT-000001";
                    if (lastProjectResult.length > 0) {
                      let lastProjectId = lastProjectResult[0].project_id;
                      let lastNumber = parseInt(lastProjectId.split("-")[1]);
                      newProjectId = `PJT-${String(lastNumber + 1).padStart(6, "0")}`;
                    }

                    const insertProjectQuery = `
                      INSERT INTO addproject (client_id, project_id, lead_id, builder_name, project_name, location, contact_email, created_by, created_at)
                      VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
                    `;
                    db.query(insertProjectQuery, [newUserId, newProjectId, newLeadId, builder_name, project_name, location, email_id, created_by], (err, projectInsertResult) => {
                      if (err) return res.status(500).json({ success: false, message: "Database error", error: err });

                      sendContractedEmail(email_id, contact_person, project_name, plainPassword);
                      return res.status(201).json({
                        success: true,
                        message: "Company, Lead added, user created with unique user_id, project added, and email sent successfully.",
                        lead_id: newLeadId,
                        project_id: newProjectId,
                        company_id: companyId,
                        user_id: newUserId,
                      });
                    });
                  });
                });
              });
            });
          } else {
            return res.status(201).json({ success: true, message: "Lead added successfully", lead_id: newLeadId });
          }
        });
      });
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error", error });
  }
};





exports.updateLeadStatus = (req, res) => {
  try {
    const { lead_id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ success: false, message: "Status is required." });
    }

    const getCurrentStatusQuery = `SELECT status, builder_name, project_name, location, contact_person, email_id, phone_no, created_by 
                                   FROM addlead WHERE lead_id = ?`;
    db.query(getCurrentStatusQuery, [lead_id], (err, leadResult) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Database error", error: err });
      }
      if (leadResult.length === 0) {
        return res.status(404).json({ success: false, message: "Lead not found" });
      }

      const { status: currentStatus, builder_name, project_name, location, contact_person, email_id, phone_no, created_by } = leadResult[0];

      if (currentStatus === "Contracted" && status !== "Contracted") {
        return res.status(400).json({ success: false, message: "Status cannot be changed from 'Contracted' to another status." });
      }

      if (currentStatus === status) {
        return res.status(200).json({ success: true, message: "No changes detected. Status remains the same." });
      }

      const updateLeadQuery = `UPDATE addlead SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE lead_id = ?`;
      db.query(updateLeadQuery, [status, lead_id], (err, updateResult) => {
        if (err) {
          return res.status(500).json({ success: false, message: "Database error", error: err });
        }

        if (status === "Contracted") {
          const insertCompanyQuery = `INSERT INTO company (name, assign_to, created_by, created_at) VALUES (?, ?, ?, NOW())`;
          db.query(insertCompanyQuery, [builder_name, created_by, created_by], (err, companyResult) => {
            if (err) {
              return res.status(500).json({ success: false, message: "Database error", error: err });
            }
            const companyId = companyResult.insertId;

            const generateUniqueUserId = (callback) => {
              const getLastUserIdQuery = `SELECT user_id FROM users ORDER BY created_at DESC LIMIT 1`;
              db.query(getLastUserIdQuery, (err, lastUserResult) => {
                if (err) return callback(err);

                let newUserId = "JPU-00001";
                if (lastUserResult.length > 0) {
                  let lastUserId = lastUserResult[0].user_id;
                  let lastNumber = parseInt(lastUserId.split("-")[1]);
                  newUserId = `JPU-${String(lastNumber + 1).padStart(5, "0")}`;
                }

                const checkUserIdQuery = `SELECT user_id FROM users WHERE user_id = ?`;
                db.query(checkUserIdQuery, [newUserId], (err, checkResult) => {
                  if (err) return callback(err);
                  if (checkResult.length > 0) {
                    generateUniqueUserId(callback);
                  } else {
                    callback(null, newUserId);
                  }
                });
              });
            };

            generateUniqueUserId((err, newUserId) => {
              if (err) return res.status(500).json({ success: false, message: "Database error", error: err });

              const plainPassword = generateRandomPassword(8);
              const encryptedPassword = bcrypt.hashSync(plainPassword, 10);
              const insertUserQuery = `
                INSERT INTO users (user_id, name, email, password, role_id, mobile, company_id, created_by, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
              `;
              db.query(insertUserQuery, [newUserId, contact_person, email_id, encryptedPassword, 15, phone_no, companyId, created_by], (err, userResult) => {
                if (err) {
                  return res.status(500).json({ success: false, message: "Database error", error: err });
                }

                const getLastProjectIdQuery = `SELECT project_id FROM addproject ORDER BY created_at DESC LIMIT 1`;
                db.query(getLastProjectIdQuery, (err, lastProjectResult) => {
                  if (err) {
                    return res.status(500).json({ success: false, message: "Database error", error: err });
                  }
                  let newProjectId = "PJT-000001";
                  if (lastProjectResult.length > 0) {
                    let lastProjectId = lastProjectResult[0].project_id;
                    let lastNumber = parseInt(lastProjectId.split("-")[1]);
                    newProjectId = `PJT-${String(lastNumber + 1).padStart(6, "0")}`;
                  }

                  const insertProjectQuery = `INSERT INTO addproject (client_id, project_id, lead_id, builder_name, project_name, location, contact_email, created_by, created_at) 
                                              VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`;
                  db.query(insertProjectQuery, [newUserId, newProjectId, lead_id, builder_name, project_name, location, email_id, created_by], (err, projectInsertResult) => {
                    if (err) {
                      return res.status(500).json({ success: false, message: "Database error", error: err });
                    }

                    sendContractedEmail(email_id, contact_person, lead_id, plainPassword);

                    return res.status(200).json({
                      success: true,
                      message: "Lead status updated to Contracted, company, project, and user created",
                      project_id: newProjectId,
                      company_id: companyId,
                      user_id: newUserId,
                    });
                  });
                });
              });
            });
          });
        } else {
          return res.status(200).json({ success: true, message: "Status updated successfully" });
        }
      });
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};









// exports.updateLeadStatus = (req, res) => {
//   try {
//     const { lead_id } = req.params; // Get lead_id from URL params
//     const { project_completion_status } = req.body; // Get updated status from request body

//     if (!project_completion_status) {
//       return res
//         .status(400)
//         .json({
//           success: false,
//           message: "Project completion status is required.",
//         });
//     }

//     const sql =
//       "UPDATE addlead SET project_completion_status = ?, updated_at = CURRENT_TIMESTAMP WHERE lead_id = ?";
//     db.query(sql, [project_completion_status, lead_id], (err, result) => {
//       if (err) {
//         console.error("Error updating status:", err);
//         return res
//           .status(500)
//           .json({ success: false, message: "Database error", error: err });
//       }

//       if (result.affectedRows === 0) {
//         return res
//           .status(404)
//           .json({ success: false, message: "Lead not found" });
//       }

//       res
//         .status(200)
//         .json({
//           success: true,
//           message: "Project status updated successfully",
//         });
//     });
//   } catch (error) {
//     console.error("API error:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };
