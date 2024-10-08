import express from "express";
import { verifyToken } from "../utils/verify.js";
import { getUser } from "../controllers/userC.js";

const router = express.Router();

// get authed user info
router.get("/", verifyToken, getUser);

// edit authed user info

export default router;