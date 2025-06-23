import express from "express";
import register from "../controllers/RegisterController";
import { validateRegister } from "../utils/validators/auth";

const router = express.Router();

router.post("/register", validateRegister, register);

export default router;