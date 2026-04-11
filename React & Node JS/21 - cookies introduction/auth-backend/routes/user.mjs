import { Router } from "express";
import { fetchProfile } from "../controllers/user-controller.mjs";
import verifyToken from "../middleware/verify-token.mjs";

const router = new Router();

router.get("/profile", verifyToken, fetchProfile);

export default router;