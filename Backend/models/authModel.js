const db = require('../config/db'); // Import database configuration

const User = {
    create: (userData, callback) => {
        const query = `INSERT INTO users (name, email, password, role_id, company_id, mobile, active, created_by) 
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [userData.name, userData.email, userData.password, userData.role_id, userData.company_id, 
            userData.mobile, userData.active, userData.created_by], callback);
    },
    findByEmail: (email, callback) => {
        const query = `SELECT * FROM users WHERE email = ?`;
        db.query(query, [email], callback);
    },
    findById: (id, callback) => {
        const query = `SELECT * FROM users WHERE id = ?`;
        db.query(query, [id], callback);
    },
    updatePassword: (id, newPassword, callback) => {
        const query = `UPDATE users SET password = ? WHERE id = ?`;
        db.query(query, [newPassword, id], callback);
    },
    updateOtp: (email, otp, otpExpiry, callback) => {
        const query = `UPDATE users SET otp = ?, otp_expiry = ? WHERE email = ?`;
        db.query(query, [otp, otpExpiry, email], callback);
    }
};

module.exports = User;
