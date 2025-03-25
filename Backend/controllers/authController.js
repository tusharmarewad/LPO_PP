require('dotenv').config(); // Load environment variables from .env file

const User = require('../models/authModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const transporter = require('../config/mailTransporter');

// Register API
// exports.register = (req, res) => {
//     const { name, email, password, role_id, company_id, mobile, created_by } = req.body;

//     // Hash the password before saving it to the database
//     bcrypt.hash(password, 10, (err, hashedPassword) => {
//         if (err) {
//             return res.status(500).json({ message: 'Error hashing password' });
//         }

//         const newUser = {
//             name,
//             email,
//             password: hashedPassword,
//             role_id,
//             company_id,
//             mobile,
//             active: 1,
//             created_by
//         };

//         User.create(newUser, (err, result) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error registering user' });
//             }
//             res.status(201).json({ message: 'User registered successfully' });
//         });
//     });
// };

exports.register = async (req, res) => {
    const { name, email, password, role_id, company_id, mobile, created_by } = req.body;

    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Fetch the last inserted user_id
        const lastUser = await User.findOne({}, { user_id: 1 }).sort({ _id: -1 }).limit(1);

        let newUserId;
        if (!lastUser) {
            newUserId = "JPU-00001"; // Start from JPU-00001
        } else {
            // Extract the numeric part, increment it, and format it back
            const lastId = lastUser.user_id;
            const lastNum = parseInt(lastId.split('-')[1], 10);
            newUserId = `JPU-${String(lastNum + 1).padStart(5, '0')}`;
        }

        const newUser = {
            user_id: newUserId,
            name,
            email,
            password: hashedPassword,
            role_id,
            company_id,
            mobile,
            active: 1,
            created_by
        };

        await User.create(newUser);
        res.status(201).json({ message: 'User registered successfully', user_id: newUserId });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error registering user' });
    }
};


// Login API
exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, user) => {
        if (err) {
            console.error('Error while querying database:', err);
            return res.status(500).json({ message: 'Error querying database' });
        }

        // If user is not found, return an error
        if (!user || user.length === 0) {
            console.log('User not found:', email);
            return res.status(400).json({ message: 'User not found' });
        }

        // Access the first user in the array and log the password
        const foundUser = user[0];
        // console.log('Stored hashed password:', foundUser.password);

        // Compare the raw password (from request) with the hashed password (stored in the database)
        bcrypt.compare(password, foundUser.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ message: 'Error comparing passwords' });
            }

            if (!isMatch) {
                console.log('Password mismatch:', password);
                return res.status(400).json({ message: 'Invalid password' });
            }

            // Remove sensitive information from the response
            const { password, otp, otp_expiry, ...userData } = foundUser;
            // Generate JWT token using secret from .env file
            const token = jwt.sign({ id: userData.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

            res.status(200).json({ message: 'Login successful', token, user:  userData});
        });
    });
};                          

// Forgot Password API
exports.forgotPassword = (req, res) => {
    const { email } = req.body;

    User.findByEmail(email, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Generate OTP and set expiration time
        const otp = crypto.randomBytes(3).toString('hex');
        const otpExpiry = new Date(Date.now() + 3600000); // OTP valid for 1 hour

        // Update OTP in the database
        User.updateOtp(email, otp, otpExpiry, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating OTP' });
            }

            // Send OTP to the user's email
            transporter.sendEmail(email, 'Password Reset OTP', `Your OTP is ${otp}`).then(() => {
                res.status(200).json({ message: 'OTP sent to email' });
            }).catch((err) => {
                res.status(500).json({ message: 'Error sending OTP email' });
            });
        });
    });
};

// Reset Password API
exports.resetPassword = (req, res) => {
    const { email, otp, newPassword } = req.body;

    User.findByEmail(email, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Check if OTP is valid and has not expired
        if (user.otp !== otp || new Date() > new Date(user.otp_expiry)) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        // Hash the new password and update it in the database
        bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({ message: 'Error hashing new password' });
            }

            User.updatePassword(user.id, hashedPassword, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Error updating password' });
                }
                res.status(200).json({ message: 'Password reset successful' });
            });
        });
    });
};