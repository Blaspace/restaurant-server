/** @format */

import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const genName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + genName + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

export default upload;
