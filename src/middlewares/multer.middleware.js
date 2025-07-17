// src/middlewares/multer.middleware.js

import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

// Corrected: Only export as default
const upload = multer({
    storage,
})

export default upload; // <--- ONLY THIS LINE IS NEEDED FOR DEFAULT EXPORT