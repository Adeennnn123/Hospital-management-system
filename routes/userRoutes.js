import express from "express";
import {
  addUser,
  getUsers
} from "../controllers/userController.js";

const router = express.Router();

// POST - Add User
router.post("/", addUser);

// GET - Get All Users
router.get("/", getUsers);

export default router;