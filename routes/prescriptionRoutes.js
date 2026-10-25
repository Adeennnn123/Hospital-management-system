
import express from "express";
import {
  addPrescription,
  getPrescriptions
} from "../controllers/prescriptionController.js";

const router = express.Router();

router.post("/", addPrescription);
router.get("/", getPrescriptions);

export default router;
