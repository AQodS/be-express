import express from "express";
import register from "../controllers/RegisterController.js";
import login from "../controllers/LoginController.js";
import verifyToken from "../middlewares/auth.js";
import { validateUser } from "../utils/validators/user.js";
import { validateRegister, validateLogin } from "../utils/validators/auth.js";
import { createUser, findUser, findUserById, updateUser, deleteUser } from "../controllers/UserController.js";


const router = express.Router();

// endpoints
router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/admin/users", verifyToken, findUser);
router.post("/admin/users", verifyToken, validateUser, createUser);
router.get("/admin/users/:id", verifyToken, findUserById);
router.put("/admin/users/:id", verifyToken, validateUser, updateUser);
router.delete("/admin/users/:id", verifyToken, deleteUser);

export default router;