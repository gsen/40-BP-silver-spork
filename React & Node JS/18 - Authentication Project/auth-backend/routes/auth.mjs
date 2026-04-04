import { Router } from "express";
import { login, registerUser } from "../controllers/auth-controller.mjs";
const router = new Router();

router.post("/register", registerUser)

router.post("/login", login)

export default router;