
import Department from "../models/departmentmodel.js";

// POST API: Add a department
export const addDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);

    res.status(201).json({
      message: "Department added successfully",
      department: department
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET API: Get all departments
export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();

    res.status(200).json({
      message: "Departments fetched successfully",
      departments: departments
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
