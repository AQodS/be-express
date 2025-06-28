import express from "express";
import register from "../controllers/RegisterController.js";
import login from "../controllers/LoginController.js";
import { findUser } from "../controllers/UserController.js";
import verifyToken from "../middlewares/auth.js";
import { validateUser } from "../utils/validators/user.js";
import { validateRegister, validateLogin } from "../utils/validators/auth.js";


const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/admin/users", verifyToken, findUser);
router.post("/admin/users", verifyToken, validateUser, findUser);

export default router;