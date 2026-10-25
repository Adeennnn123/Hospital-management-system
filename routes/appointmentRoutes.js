
import express from "express";
import {
  addAppointment,
  getAppointments
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/", addAppointment);
router.get("/", getAppointments);

export default router;
