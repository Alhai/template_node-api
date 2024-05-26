import { Router } from "express";
import { UserModel } from "../models/Users/user-model";
import { checkToken } from "../middlewares/checkToken";
import jwt from "jsonwebtoken";

export const userRouter = Router();

userRouter.get("/me", checkToken, async (req, res) => {
    try {
        const decoded = jwt.decode(req.token!) as any;
        const user = await UserModel.findById(decoded.id).select('-password');
        if (user) {
            res.json(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send("Internal Server Error");
    }
});
