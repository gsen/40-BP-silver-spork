import { Router } from "express";
import { login, registerUser } from "../controllers/auth-controller.mjs";
// import verfiyToken from "../middleware/verify-token.mjs";
const router = new Router();

router.post("/register", registerUser)

router.post("/login", login)

// router.post("/logout", verfiyToken, logout)

export default router;