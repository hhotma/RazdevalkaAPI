import User from "../models/User.js";

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const { password, images, ...rest } = user._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}