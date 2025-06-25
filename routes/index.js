import express from "express";
import register from "../controllers/RegisterController.js";
import login from "../controllers/LoginController.js";
import { validateRegister, validateLogin } from "../utils/validators/auth.js";

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

export default router;