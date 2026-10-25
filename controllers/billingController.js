
import Billing from "../models/billingmodel.js";

// POST API: Add a new bill
export const addBilling = async (req, res) => {
  try {
    const billing = await Billing.create(req.body);

    res.status(201).json({
      message: "Bill added successfully",
      billing: billing
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET API: Get all bills
export const getBillings = async (req, res) => {
  try {
    const billings = await Billing.find().populate("patient");

    res.status(200).json({
      message: "Bills fetched successfully",
      billings: billings
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
