import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import genRoute from "./routes/gen.js";

dotenv.config()

const api = express()

// database init
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected..");
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected..");
})


// setup middlewares
api.use(cookieParser());
api.use(express.json());
api.use(cors());
// api.use(express.static("public"));

// route middlewares
api.use("/auth", authRoute);
api.use("/user", userRoute);
api.use("/gen", genRoute);

// error handling
api.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});


// initiation
api.listen(8800, () => {
    connectDB();
    console.log("backend initiated..")
});