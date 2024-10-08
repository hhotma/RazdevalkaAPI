import express from "express";
import { login, register } from "../controllers/authC.js";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("auth working");
})

router.post("/login", login);

router.post("/register", register);

export default router;