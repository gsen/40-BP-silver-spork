import { Router } from "express";
import { fetchProfile, profilePicture } from "../controllers/user-controller.mjs";
import verifyToken from "../middleware/verify-token.mjs";
import multer from "multer";

function getExtension(mimeType) {
    return mimeType?.split("/")[1];
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${file.fieldname}-${uniqueSuffix}.${getExtension(file.mimetype)}`)
    }
})

const router = new Router();
const upload = multer({ storage })
router.get("/profile", verifyToken, fetchProfile);
router.post("/profile", upload.single('avatar'), profilePicture)

export default router;