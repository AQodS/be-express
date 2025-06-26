import express from "express";
import register from "../controllers/RegisterController.js";
import login from "../controllers/LoginController.js";
import { findUser } from "../controllers/UserController.js";
import { validateRegister, validateLogin } from "../utils/validators/auth.js";
import verifyToken from "../middlewares/auth.js";


const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/users", verifyToken, findUser);

export default router;