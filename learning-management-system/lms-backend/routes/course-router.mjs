import { Router } from "express";
import {
    createCourse,
    deleteCourse,
    getCourseById,
    getCourses,
    handleUpload,
    updateCourse,
    thumbnailImage
} from "../controllers/course-controller.mjs";
import { addLectureToCourse } from "../controllers/lecture-controller.mjs";
import verifyToken from "../middleware/verify-token.mjs";

const router = new Router();

router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/", verifyToken, createCourse);
router.patch("/:id", verifyToken, updateCourse);
router.delete("/:id", verifyToken, deleteCourse);
router.post("/:id/lectures", verifyToken, addLectureToCourse);
router.post("/thumbnail", (req, res, next) => {
    console.log("thumbnail")
    console.log(req)
    next();

}, handleUpload, thumbnailImage);

export default router;
