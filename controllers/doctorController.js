import Doctor from "../models/doctormodel.js";

// POST API: Add a doctor
export const addDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      message: "Doctor added successfully",
      doctor: doctor
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET API: Get all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json({
      message: "Doctors fetched successfully",
      doctors: doctors
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};