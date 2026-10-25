
import express from "express";
import {
  addBilling,
  getBillings
} from "../controllers/billingController.js";

const router = express.Router();

router.post("/", addBilling);
router.get("/", getBillings);

export default router;
