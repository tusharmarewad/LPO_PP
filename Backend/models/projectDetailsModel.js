const db = require('../config/db'); // assuming your DB connection is in config/db.js
const transporter = require('../config/mailTransporter');
const bcrypt = require('bcryptjs');

const Project = {


    // Create a new user
    createUser: (data, callback) => {
        const { user_id, name, email, password, role_id, mobile, address, city, state, pincode, aadhaar_number, pan_number, dob, age, created_by } = data;

        // Hash the password using bcryptjs
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.log('Error hashing password:', err);
                return callback(err);
            }

            const query = `INSERT INTO users (user_id, name, email, password, role_id, mobile, address, city, state, pincode, aadhaar_number, pan_number, dob, age, created_by) 
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            db.query(query, [user_id, name, email, hashedPassword, role_id, mobile, address, city, state, pincode, aadhaar_number, pan_number, dob, age, created_by], (err, result) => {
                if (err) {
                    console.log('Error inserting user into database:', err);
                    return callback(err);
                }

                // Send email with login credentials
                sendEmail(email, password, name); // Send credentials to the user's email

                // Callback with the user ID after creation
                callback(null, result, password);  // Returning the inserted user ID and password
            });
        });
    },


    // Insert data into the database from CSV
    insertProjectData: (data, callback) => {
        const {
            project_id,
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
            floor_name,
            number_of_balcony,
            balcony_sq_mt,
            number_of_terace,
            terace_sq_mt,
            number_of_parking,
            parking_sq_mt,
            area_sq_mt,
            rate_sq_mt,
            infra_cost,
            other_charges,
            other_charges_1,
            mseb,
            society,
            one_yr_maintenance,
            life_time_maintenance,
            club_house,
            sgst_unit,
            cgst_unit,
            sgst_maintenance,
            cgst_maintenance,
            stamp_duty,
            registration_fees,
            lbt,
            metro,
            other_gov_fees,
            legal_fees,
            total_cost,
            subsidy,
            other_discount,
            other_charges_2,
            authority_approval_req_notreq,
            authority_approval_latter_taken_not_taken,
            authority_approval_name,
            booking_amount,
            amount_at_agreement,
            amount_at_2nd_slab,
            amount_at_4th_slab,
            amount_at_6th_slab,
            amount_at_8th_slab,
            amount_at_10th_slab,
            amount_at_plaster,
            amount_at_flooring,
            amount_at_possession,
            sold_unsold,
            cp_id,
            cp_name,
            cp_email,
            cp_phone_number,
            agreement_status_done_notdone,
            ind_nonind,
            first_owner_id,
            first_owner_poa_id,
            second_owner_id,
            second_owner_poa_id,
            third_owner_id,
            third_owner_poa_id,
            loan_req_notreq,
            loan_status,
            bank_name,
            loan_amount
        } = data;

        const query = `INSERT INTO project_details (
            project_id, phase_number, building_name, floor_number, unit_number, unit_type, unit_category, agreement_value, buildup_area, carpet_area, created_by,
            floor_name, number_of_balcony, balcony_sq_mt, number_of_terace, terace_sq_mt, number_of_parking, parking_sq_mt, area_sq_mt, rate_sq_mt, infra_cost, other_charges, other_charges_1,
            mseb, society, one_yr_maintenance, life_time_maintenance, club_house, sgst_unit, cgst_unit, sgst_maintenance, cgst_maintenance, stamp_duty, registration_fees, lbt, metro, 
            other_gov_fees, legal_fees, total_cost, subsidy, other_discount, other_charges_2, authority_approval_req_notreq, authority_approval_latter_taken_not_taken, authority_approval_name,
            booking_amount, amount_at_agreement, amount_at_2nd_slab, amount_at_4th_slab, amount_at_6th_slab, amount_at_8th_slab, amount_at_10th_slab, amount_at_plaster, amount_at_flooring,
            amount_at_possession, sold_unsold, cp_id, cp_name, cp_email, cp_phone_number, agreement_status_done_notdone, ind_nonind, first_owner_id, first_owner_poa_id, second_owner_id, second_owner_poa_id, third_owner_id,
            third_owner_poa_id,loan_req_notreq, loan_status, bank_name, loan_amount) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [project_id, phase_number, building_name, floor_number, unit_number, unit_type, unit_category, agreement_value, buildup_area, carpet_area, created_by, floor_name,
            number_of_balcony,
            balcony_sq_mt,
            number_of_terace,
            terace_sq_mt,
            number_of_parking,
            parking_sq_mt,
            area_sq_mt,
            rate_sq_mt,
            infra_cost,
            other_charges,
            other_charges_1,
            mseb,
            society,
            one_yr_maintenance,
            life_time_maintenance,
            club_house,
            sgst_unit,
            cgst_unit,
            sgst_maintenance,
            cgst_maintenance,
            stamp_duty,
            registration_fees,
            lbt,
            metro,
            other_gov_fees,
            legal_fees,
            total_cost,
            subsidy,
            other_discount,
            other_charges_2,
            authority_approval_req_notreq,
            authority_approval_latter_taken_not_taken,
            authority_approval_name,
            booking_amount,
            amount_at_agreement,
            amount_at_2nd_slab,
            amount_at_4th_slab,
            amount_at_6th_slab,
            amount_at_8th_slab,
            amount_at_10th_slab,
            amount_at_plaster,
            amount_at_flooring,
            amount_at_possession,
            sold_unsold,
            cp_id,
            cp_name,
            cp_email,
            cp_phone_number,
            agreement_status_done_notdone,
            ind_nonind,
            first_owner_id,
            first_owner_poa_id,
            second_owner_id,
            second_owner_poa_id,
            third_owner_id,
            third_owner_poa_id,
            loan_req_notreq,
            loan_status,
            bank_name,
            loan_amount], callback);
    },

    // Fetch all records by project_id
    fetchAllRecordsByProjectId: (project_id, callback) => {
        const query = `SELECT * FROM project_details WHERE project_id = ?`;
        db.query(query, [project_id], callback);
    },

    // Update record by id
    updateRecordById: (id, data, callback) => {
        const { phase_number, building_name, floor_number, unit_number, unit_type, unit_category, agreement_value, buildup_area, carpet_area, created_by } = data;
        const query = `UPDATE project_details SET phase_number = ?, building_name = ?, floor_number = ?, unit_number = ?, unit_type = ?, unit_category = ?, agreement_value = ?, buildup_area = ?, carpet_area = ?, created_by = ? WHERE id = ?`;
        db.query(query, [phase_number, building_name, floor_number, unit_number, unit_type, unit_category, agreement_value, buildup_area, carpet_area, created_by, id], callback);
    }
};

// Function to send email with credentials
const sendEmail = (email, password, name) => {

    let mailOptions = {
        from: process.env.EMAIL_USER, // Replace with your email
        to: email,
        subject: 'Your Login Credentials',
        text: `Hello ${name},\n\nYour login credentials are as follows:\nUsername: ${email}\nPassword: ${password}\n\nBest regards,\nYour Company`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('Error sending email:', err);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};


module.exports = Project;
