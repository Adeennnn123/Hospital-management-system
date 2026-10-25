
import Medicine from "../models/medicinemodel.js";

// POST API: Add a medicine
export const addMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);

    res.status(201).json({
      message: "Medicine added successfully",
      medicine: medicine
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET API: Get all medicines
export const getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();

    res.status(200).json({
      message: "Medicines fetched successfully",
      medicines: medicines
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
