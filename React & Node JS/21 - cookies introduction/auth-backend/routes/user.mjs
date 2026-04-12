import { Router } from "express";
import { fetchProfile, profilePicture } from "../controllers/user-controller.mjs";
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

function fileFilter(req, file, cb) {
    const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
    if (allowedTypes.includes(file.mimeType)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type"), false);
    }
}

const router = new Router();
const upload = multer({ storage, fileFilter })
router.get("/profile", fetchProfile);
router.post("/profile/pic", upload.single('avatar'), profilePicture)

export default router;