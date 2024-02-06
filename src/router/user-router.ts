import { Router } from "express";
import jwt from "jsonwebtoken";
import { checkToken } from "../middlewares/checkToken";
import { UserModel } from "../models/Users/user-model"; 

export const userRouter = Router();

userRouter.get("/me", checkToken, async (req, res) => {
    try {
        const decoded = jwt.decode(req.token!) as any; // Remplacez 'any' par votre type de décodage si nécessaire
        const user = await UserModel.findById(decoded.id).select('-password'); // Exclure le mot de passe du résultat

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
