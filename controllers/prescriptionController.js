
import Prescription from "../models/prescriptionmodel.js";

// POST API: Add a prescription
export const addPrescription = async (req, res) => {
  try {
    const prescription = await Prescription.create(req.body);

    res.status(201).json({
      message: "Prescription added successfully",
      prescription: prescription
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET API: Get all prescriptions
export const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find()
      .populate("patient")
      .populate("doctor");

    res.status(200).json({
      message: "Prescriptions fetched successfully",
      prescriptions: prescriptions
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
