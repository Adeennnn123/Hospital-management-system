
import express from "express";
import {
  addMedicalRecord,
  getMedicalRecords
} from "../controllers/medicalRecordController.js";

const router = express.Router();

router.post("/", addMedicalRecord);
router.get("/", getMedicalRecords);

export default router;
