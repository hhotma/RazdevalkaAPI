import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    credits: {
        type: Number,
        default: 0
    },
    images: {
        type: [String]
    }
}, { timestamps: true }
);

export default mongoose.model("User", UserSchema);