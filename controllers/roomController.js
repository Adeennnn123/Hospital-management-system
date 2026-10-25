import Room from "../models/roommodel.js";

// POST API - Add Room
export const addRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(201).json({
      message: "Room added successfully",
      room: room
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET API - Get All Rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate("patient");

    res.status(200).json({
      message: "Rooms fetched successfully",
      rooms: rooms
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};