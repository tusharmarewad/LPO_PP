const Project = require("../models/projectDetailsModel");
const fs = require("fs");
const csv = require("fast-csv");
const db = require("../config/db");
const { log } = require("console");
const XLSX = require('xlsx');
const moment = require('moment');

// Function to generate a random password
const generateRandomPassword = () => {
  return Math.random().toString(36).slice(-8); // Generates a random 8-character password
};
const generateUniqueUserId = () => {
    const prefix = "JPU-";
    const timestamp = Date.now() // Take the last 5 digits of the timestamp
    const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    return `${prefix}${timestamp}${randomNum}`;
  };
  
  


  const createUser = (userData, role_id, callback) => {
    const password = generateRandomPassword();
    const newUserId = generateUniqueUserId();
  
    // Format the date to MySQL format (YYYY-MM-DD)
    const formattedDob = moment(userData.dob).format('YYYY-MM-DD');
  
    // Create the user object after generating the user_id
    const user = {
      user_id: newUserId,
      name: userData.name,
      email: userData.email,
      password: password,
      role_id: role_id,
      mobile: userData.mobile,
      address: userData.address,
      city: userData.city,
      state: userData.state,
      aadhaar_number: userData.aadhaar_number,
      pan_number: userData.pan_number,
      pincode: userData.pincode,
      dob: formattedDob,  // Formatted date
      age: userData.age,
      created_by: userData.created_by,
    };
  
    // Now call Project.createUser within the callback
    Project.createUser(user, (err, result) => {
      if (err) {
        console.log("Error creating user:", err);
        return callback(err);
      }
  
      // Send back the user ID and password
      callback(null, result.insertId, password);
    });
  };
  

// Upload CSV and insert data into the database
const uploadCSV = (req, res) => {
  const csvFile = req.file; // assuming multer handles CSV upload

  const results = [];

  fs.createReadStream(csvFile.path)
    .pipe(csv.parse({ headers: true }))
    .on("data", (row) => {
      results.push(row);
    })
    .on("end", () => {
      // Iterate over CSV rows and insert into the database
      results.forEach((row) => {
        const projectData = {
          project_id: req.body.project_id,
          phase_number: req.body.phase_number,
          building_name: req.body.building_name,
          floor_number: row["Floor Number"] || null,
          unit_number: row["Unit Number"] || null,
          unit_type: row["Unit Type"] || null,
          unit_category: row["Unit Category"] || null,
          agreement_value: row["Agreement Value"] || null,
          buildup_area: row["Build Up Area (Sq Mt)"] || null,
          carpet_area: row["Carpet Area (Sq Mt)"] || null,
          created_by: req.body.created_by,
          floor_name: row["Floor Name"] || null,
          number_of_balcony: row["Number of Balcony"] || 0,
          balcony_sq_mt: row["Balcony Sq Mt"] || 0,
          number_of_terace: row["Number of Terace"] || 0,
          terace_sq_mt: row["Terace Sq Mt"] || 0,
          number_of_parking: row["Number of Parking"] || 0,
          parking_sq_mt: row["Parking Sq Mt"] || 0,
          area_sq_mt: row[" Area Sq Mt"] || 0,
          rate_sq_mt: row["Rate/Sq Mt"] || 0,
          infra_cost: row["Infra Cost"] || 0,
          other_charges: row["Other Charges"] || 0,
          other_charges_1: row["Other Charges.1"] || 0,
          mseb: row["MSEB"] || 0,
          society: row["Society"] || 0,
          one_yr_maintenance: row["1 Yr Maintenance"] || 0,
          life_time_maintenance: row["Life Time Maintenance"] || 0,
          club_house: row["Club House"] || 0,
          sgst_unit: row["SGST Unit"] || 0,
          cgst_unit: row["CGST Unit"] || 0,
          sgst_maintenance: row["SGST Maintenance"] || 0,
          cgst_maintenance: row["CGST Maintenance"] || 0,
          stamp_duty: row["Stamp Duty"] || 0,
          registration_fees: row["Registration Fees"] || 0,
          lbt: row["LBT"] || 0,
          metro: row["Metro"] || 0,
          other_gov_fees: row["Other Gov Fees"] || 0,
          legal_fees: row["Legal Fees"] || 0,
          total_cost: row["Total Cost"] || 0,
          subsidy: row["Subsidy"] || 0,
          other_discount: row["Other Discount"] || 0,
          other_charges_2: row["Other Charges.2"] || 0,
          authority_approval_req_notreq:
            row["Authority Approval (Req/NotReq)"] || null,
          authority_approval_latter_taken_not_taken:
            row["Authority Approval Latter (Taken/NotTaken)"] || null,
          authority_approval_name: row["Authority Approval Name"] || null,
          booking_amount: row["Booking Amount"] || 0,
          amount_at_agreement: row["Amount At Agreement"] || 0,
          amount_at_2nd_slab: row["Amount At 2nd Slab"] || 0,
          amount_at_4th_slab: row["Amount At 4th Slab"] || 0,
          amount_at_6th_slab: row["Amount At 6th Slab"] || 0,
          amount_at_8th_slab: row["Amount At 8th Slab"] || 0,
          amount_at_10th_slab: row["Amount At 10th Slab"] || 0,
          amount_at_plaster: row["Amount At Plaster"] || 0,
          amount_at_flooring: row["Amount At Flooring"] || 0,
          amount_at_possession: row["Amount At Possession"] || 0,
          sold_unsold: row["Sold/Unsold"] || null,
          cp_id: row["CP Id"] || null,
          cp_name: row["CP Name"] || null,
          cp_email: row["CP Email"] || null,
          cp_phone_number: row["CP Phone Number"] || null,
          agreement_status_done_notdone:
            row["Agreement Status (Done/NotDone)"] || null,
          ind_nonind: row["Ind/NonInd"] || null,
          loan_req_notreq: row["Loan (Req/NotReq)"] || null,
          loan_status: row["Loan Status"] || null,
          bank_name: row["Bank Name"] || null,
          loan_amount: row["Loan Amount"] || 0,
        };

        // Create users for each owner and POA, and store their IDs in the project_details table
        let ownerPromises = [];

        // For 1st Owner (Optional)
        if (row["1st Owner Name"] && row["1st Owner Email ID"]) {
          ownerPromises.push(
            new Promise((resolve, reject) => {
              createUser(
                {
                  name: row["1st Owner Name"],
                  email: row["1st Owner Email ID"],
                  mobile: row["1st Owner Mobile Number"],
                  address: row["1st Owner Address"],
                  city: row["1st Owner City"],
                  state: row["1st Owner State"],
                  aadhaar_number: row["1st Owner Aadhaar Number"],
                  pan_number: row["1st Owner Pan Number"],
                  pincode: row["1st Owner Pincode"],
                  dob: row["1st Owner DOB"],
                  age: row["1st Owner Age"],
                  created_by: req.body.created_by,
                },
                2,
                (err, userId, password) => {
                  if (err) reject(err);
                  projectData.first_owner_id = userId; // Store 1st owner's ID in project details
                  resolve();
                }
              );
            })
          );
        } else {
          projectData.first_owner_id = null; // Ensure null is set if no owner data
        }

        // For 1st Owner POA (Optional)
        if (row["1st Owner POA Name"] && row["1st Owner POA Email ID"]) {
          ownerPromises.push(
            new Promise((resolve, reject) => {
              createUser(
                {
                  name: row["1st Owner POA Name"],
                  email: row["1st Owner POA Email ID"],
                  mobile: row["1st Owner POA Mobile Number"],
                  address: row["1st Owner POA Address"],
                  city: row["1st Owner POA City"],
                  state: row["1st Owner POA State"],
                  aadhaar_number: row["1st Owner POA Aadhaar Number"],
                  pan_number: row["1st Owner POA Pan Number"],
                  pincode: row["1st Owner POA Pincode"],
                  dob: row["1st Owner POA DOB"],
                  age: row["1st Owner POA Age"],
                  created_by: req.body.created_by,
                },
                2,
                (err, userId, password) => {
                  if (err) reject(err);
                  projectData.first_owner_poa_id = userId; // Store 1st owner's POA ID in project details
                  resolve();
                }
              );
            })
          );
        } else {
          projectData.first_owner_poa_id = null; // Ensure null is set if no POA data
        }

        // For 2nd Owner (Optional)
        if (row["2nd Owner Name"] && row["2nd Owner Email ID"]) {
          ownerPromises.push(
            new Promise((resolve, reject) => {
              createUser(
                {
                  name: row["2nd Owner Name"],
                  email: row["2nd Owner Email ID"],
                  mobile: row["2nd Owner Mobile Number"],
                  address: row["2nd Owner Address"],
                  city: row["2nd Owner City"],
                  state: row["2nd Owner State"],
                  aadhaar_number: row["2nd Owner Aadhaar Number"],
                  pan_number: row["2nd Owner Pan Number"],
                  pincode: row["2nd Owner Pincode"],
                  dob: row["2nd Owner DOB"],
                  age: row["2nd Owner Age"],
                  created_by: req.body.created_by,
                },
                2,
                (err, userId, password) => {
                  if (err) reject(err);
                  projectData.second_owner_id = userId; // Store 2nd owner's ID in project details
                  resolve();
                }
              );
            })
          );
        } else {
          projectData.second_owner_id = null; // Ensure null is set if no owner data
        }

        // For 2nd Owner POA (Optional)
        if (row["2nd Owner POA Name"] && row["2nd Owner POA Email ID"]) {
          ownerPromises.push(
            new Promise((resolve, reject) => {
              createUser(
                {
                  name: row["2nd Owner POA Name"],
                  email: row["2nd Owner POA Email ID"],
                  mobile: row["2nd Owner POA Mobile Number"],
                  address: row["2nd Owner POA Address"],
                  city: row["2nd Owner POA City"],
                  state: row["2nd Owner POA State"],
                  aadhaar_number: row["2nd Owner POA Aadhaar Number"],
                  pan_number: row["2nd Owner POA Pan Number"],
                  pincode: row["2nd Owner POA Pincode"],
                  dob: row["2nd Owner POA DOB"],
                  age: row["2nd Owner POA Age"],
                  created_by: req.body.created_by,
                },
                2,
                (err, userId, password) => {
                  if (err) reject(err);
                  projectData.second_owner_poa_id = userId; // Store 2nd owner's POA ID in project details
                  resolve();
                }
              );
            })
          );
        } else {
          projectData.second_owner_poa_id = null; // Ensure null is set if no POA data
        }

        // For 3rd Owner (Optional)
        if (row["3rd Owner Name"] && row["3rd Owner Email ID"]) {
          ownerPromises.push(
            new Promise((resolve, reject) => {
              createUser(
                {
                  name: row["3rd Owner Name"],
                  email: row["3rd Owner Email ID"],
                  mobile: row["3rd Owner Mobile Number"],
                  address: row["3rd Owner Address"],
                  city: row["3rd Owner City"],
                  state: row["3rd Owner State"],
                  aadhaar_number: row["3rd Owner Aadhaar Number"],
                  pan_number: row["3rd Owner Pan Number"],
                  pincode: row["3rd Owner Pincode"],
                  dob: row["3rd Owner DOB"],
                  age: row["3rd Owner Age"],
                  created_by: req.body.created_by,
                },
                2,
                (err, userId, password) => {
                  if (err) reject(err);
                  projectData.third_owner_id = userId; // Store 3rd owner's ID in project details
                  resolve();
                }
              );
            })
          );
        } else {
          projectData.third_owner_id = null; // Ensure null is set if no owner data
        }

        // For 3rd Owner POA (Optional)
        if (row["3rd Owner POA Name"] && row["3rd Owner POA Email ID"]) {
          ownerPromises.push(
            new Promise((resolve, reject) => {
              createUser(
                {
                  name: row["3rd Owner POA Name"],
                  email: row["3rd Owner POA Email ID"],
                  mobile: row["3rd Owner POA Mobile Number"],
                  address: row["3rd Owner POA Address"],
                  city: row["3rd Owner POA City"],
                  state: row["3rd Owner POA State"],
                  aadhaar_number: row["3rd Owner POA Aadhaar Number"],
                  pan_number: row["3rd Owner POA Pan Number"],
                  pincode: row["3rd Owner POA Pincode"],
                  dob: row["3rd Owner POA DOB"],
                  age: row["3rd Owner POA Age"],
                  created_by: req.body.created_by,
                },
                2,
                (err, userId, password) => {
                  if (err) reject(err);
                  projectData.third_owner_poa_id = userId; // Store 3rd owner's POA ID in project details
                  resolve();
                }
              );
            })
          );
        } else {
          projectData.third_owner_poa_id = null; // Ensure null is set if no POA data
        }

        // Repeat the above for 2nd Owner, 3rd Owner POA, etc.

        // Wait for all promises to resolve
        Promise.all(ownerPromises)
          .then(() => {
            // Insert project data into project_details table
            Project.insertProjectData(projectData, (err, result) => {
              if (err) {
                console.log("Error inserting project data:", err);
              }
            });
          })
          .catch((err) => {
            console.log("Error creating users or updating project data:", err);
          });
      });

      res.status(200).json({ message: "CSV data processed successfully" });
    });
};

const fetchAllRecords = (req, res) => {
  const query = `
      SELECT 
          ap.*, 
          u.name AS created_by_name
      FROM 
          addproject AS ap
      LEFT JOIN 
          users AS u ON ap.created_by = u.id
      WHERE 
        ap.admin_status = 'Pending' AND
        ap.submitted_by_cm = 1;
  `;

  db.query(query, (err, results) => {
      if (err) {
          console.error("Error fetching data:", err);
          return res.status(500).json({ message: 'Server Error' });
      }

      if (results.length === 0) {
          return res.status(404).json({ message: 'No data found' });
      }

      res.status(200).json(results);
  });
};


// Update record by ID
const updateRecord = (req, res) => {
  const { id } = req.params;
  const {
    phase_number,
    building_name,
    floor_number,
    unit_number,
    unit_type,
    unit_category,
    agreement_value,
    buildup_area,
    carpet_area,
    created_by,
  } = req.body;

  const updatedData = {
    phase_number,
    building_name,
    floor_number,
    unit_number,
    unit_type,
    unit_category,
    agreement_value,
    buildup_area,
    carpet_area,
    created_by,
  };

  Project.updateRecordById(id, updatedData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    return res
      .status(200)
      .json({ message: "Record updated successfully", data: result });
  });
};


// Update record by ID
const updateProjectStatusByAdmin = (req, res) => {
  const { project_id, remark, status } = req.body;

  if (!project_id || !status) {
      return res.status(400).json({ message: "Project ID and status are required" });
  }

  const updateQuery = `
      UPDATE addproject 
      SET 
          admin_status = ?, 
          remark = ?, 
          updated_at = NOW()
      WHERE 
          project_id = ?
  `;

  const values = [status, remark, project_id];

  db.query(updateQuery, values, (err, result) => {
      if (err) {
          console.error("Error updating project status:", err);
          return res.status(500).json({ message: "Internal Server Error" });
      }

      if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Project not found" });
      }

      res.status(200).json({ message: "Project status updated successfully" });
  });
};






const exportProjectData = (req, res) => {
    const { project_id } = req.params;
    console.log("Received project ID:", project_id);

    // SQL query to join project_details with users table
    const query = `
        SELECT pd.*, 
               u1.name AS first_owner_name, u1.email AS first_owner_email, u1.mobile AS first_owner_phone, 
               u1.address AS first_owner_address, u1.city AS first_owner_city, u1.state AS first_owner_state, u1.pincode AS first_owner_pincode, 
               u1.aadhaar_number AS first_owner_aadhaar, u1.pan_number AS first_owner_pan, u1.dob AS first_owner_dob, u1.age AS first_owner_age,
               
               u2.name AS second_owner_name, u2.email AS second_owner_email, u2.mobile AS second_owner_phone, 
               u2.address AS second_owner_address, u2.city AS second_owner_city, u2.state AS second_owner_state, u2.pincode AS second_owner_pincode, 
               u2.aadhaar_number AS second_owner_aadhaar, u2.pan_number AS second_owner_pan, u2.dob AS second_owner_dob, u2.age AS second_owner_age,

              u3.name AS third_owner_name, u3.email AS third_owner_email, u3.mobile AS third_owner_phone, 
               u3.address AS third_owner_address, u3.city AS third_owner_city, u3.state AS third_owner_state, u3.pincode AS third_owner_pincode, 
               u3.aadhaar_number AS third_owner_aadhaar, u3.pan_number AS third_owner_pan, u3.dob AS third_owner_dob, u3.age AS third_owner_age
        FROM project_details pd
        LEFT JOIN users u1 ON pd.first_owner_id = u1.id
        LEFT JOIN users u2 ON pd.second_owner_id = u2.id
        LEFT JOIN users u3 ON pd.third_owner_id = u3.id
        WHERE pd.project_id = ?;
    `;

    db.query(query, [project_id], (err, results) => {
        if (err) {
            console.error("Error exporting data:", err);
            return res.status(500).json({ message: 'Server Error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No data found for the given project ID' });
        }

        // Convert data to Excel format
        const worksheet = XLSX.utils.json_to_sheet(results);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'ProjectData');

        // Write Excel file to buffer
        const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        // Set response headers for download
        res.setHeader('Content-Disposition', `attachment; filename=project_${project_id}.xlsx`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.end(excelBuffer); // Use res.end instead of res.send for binary data
    });
};


module.exports = { uploadCSV, fetchAllRecords, updateRecord, updateProjectStatusByAdmin, exportProjectData };
