import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    }
}, { timestamps: true }
);

export default mongoose.model("Image", ImageSchema);