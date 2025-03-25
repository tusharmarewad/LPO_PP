const User = require("../models/fetchLawyerNameModel");

exports.getUsersByRole = (req, res) => {
  console.log("Controller: Fetching users by role");

  User.getUsersByRole((error, users) => {
    if (error) {
      console.error("Error fetching users:", error.message);
      return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }

    if (!users.length) {
      return res.status(404).json({ message: "No users found for the given roles" });
    }

    res.status(200).json(users);
  });
};
