import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import generateRoute from "./routes/gen.js";

dotenv.config()

const api = express()

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

api.use(express.json());

api.use("/auth", authRoute);
api.use("/user", userRoute);
api.use("/gen", generateRoute);


api.listen(8800, () => {
    connectDB();
    console.log("backend initiated..")
});