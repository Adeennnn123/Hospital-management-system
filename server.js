
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import patientRoutes from "./routes/patientRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import billingRoutes from "./routes/billingRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import medicalRecordRoutes from "./routes/medicalRecordRoutes.js";
import medicineRoutes from "./routes/medicineRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/medical-records", medicalRecordRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hospital Management System API is Running!");
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI ||
      "mongodb://127.0.0.1:27017/hospital_management"
    );

    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
  }
}

startServer();
