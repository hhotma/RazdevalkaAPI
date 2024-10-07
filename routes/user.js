import express from "express";

const router = express.Router();

// GET AUTHED USER INFO

// EDIT AUTHED USER INFO

router.get("/", (req, res, next) => {
    res.send("user working");
});


export default router;