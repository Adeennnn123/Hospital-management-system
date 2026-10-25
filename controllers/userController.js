import User from "../models/usermodel.js";

// POST - Add User
export const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
  message: "User added successfully",
  user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role
  }
});

    res.status(201).json({
      message: "User added successfully",
      user: user
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET - Get All Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      message: "Users fetched successfully",
      users: users
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};