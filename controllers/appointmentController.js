
import Appointment from "../models/appointmentmodel.js";

// POST API: Add a new appointment
export const addAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      message: "Appointment added successfully",
      appointment: appointment
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET API: Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient")
      .populate("doctor");

    res.status(200).json({
      message: "Appointments fetched successfully",
      appointments: appointments
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
