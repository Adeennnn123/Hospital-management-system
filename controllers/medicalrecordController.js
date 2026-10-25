
import MedicalRecord from "../models/medicalrecordmodel.js";

// POST API: Add a medical record
export const addMedicalRecord = async (req, res) => {
  try {
    const record = await MedicalRecord.create(req.body);

    res.status(201).json({
      message: "Medical record added successfully",
      medicalRecord: record
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET API: Get all medical records
export const getMedicalRecords = async (req, res) => {
  try {
    const records = await MedicalRecord.find()
      .populate("patient")
      .populate("doctor");

    res.status(200).json({
      message: "Medical records fetched successfully",
      medicalRecords: records
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
