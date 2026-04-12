import { Router } from "express";
import { fetchProfile, handleUpload, profilePicture } from "../controllers/user-controller.mjs";

const router = new Router();
router.get("/profile", fetchProfile);
router.post("/profile/pic", handleUpload, profilePicture)

export default router;