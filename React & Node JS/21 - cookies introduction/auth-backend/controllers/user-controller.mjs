import { getUser, updateUser } from "../repository/users.mjs";
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
    },

})

function fileFilter(req, file, cb) {
    const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        return cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", file.fieldname));
    }
}

export async function fetchProfile(req, res) {
    const { username } = req.user;
    const { profileImage, name, _id } = await getUser(username);
    res.json({ username, profileImage, name, id: _id })
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 2// 2mb
    }
})


export function handleUpload(req, res, next) {
    upload.single("avatar")(req, res, (error) => {
        if (!error) {

            return next()
        }
        if (error instanceof multer.MulterError) {
            const message = {
                "LIMIT_FILE_SIZE": "File cannot be greater than 2MB",
                "LIMIT_UNEXPECTED_FILE": " Invalid file type. Only images are allowed"
            }
            return res.status(400).json({
                error: message[error.code],
                code: error.code
            })
        }
    })
}

export async function profilePicture(req, res) {
    console.log(req.file);
    const { username } = req.user;
    await updateUser(username, { profileImage: req.file.path })
    res.send({ msg: `Avatar image uploaded succesfully` })
}