import express from "express";
import {
  addRoom,
  getRooms
} from "../controllers/roomController.js";

const router = express.Router();

// POST - Add Room
router.post("/", addRoom);

// GET - Get All Rooms
router.get("/", getRooms);

export default router;