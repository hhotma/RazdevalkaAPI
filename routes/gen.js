import express from "express";
import multer from "multer";

import { verifyToken } from "../utils/verify.js";
import { generate } from "../controllers/genC.js";

const upload = multer()

const router = express.Router();

// generate image
router.post("/image", verifyToken, upload.single("image"), generate);

// generate pose
router.post("/pose", verifyToken, (req, res, next) => {
    req.send("pose");
});

export default router;