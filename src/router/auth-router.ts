    import { Router, Request, Response } from "express";
    import bcrypt from "bcrypt";
    import jwt from "jsonwebtoken";
    import "dotenv/config";
    import { checkToken } from "../middlewares/checkToken";
    import { UserModel } from "../models/Users/user-model"; 
    import {TokenBlackListModel} from "../models/BlackListed/tokenBlackList-model"
    export const authRouter = Router();

    authRouter.post("/local/register", async (req : Request, res : Response) => {
        const { username, password, email } = req.body;
        const userWithEmail = await UserModel.findOne({ email });
        if (userWithEmail) {
            return res.status(400).json("Email already exists");
        } else {
            const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS!));
            const newUser = await UserModel.create({ username, password: hashedPassword, email });
            newUser.password = undefined; 
            res.json(newUser);
        }
    });

    authRouter.post("/local", async (req : Request, res : Response) => {
        const { identifier, password } = req.body;
        const userWithEmail = await UserModel.findOne({ email: identifier });
        if (!userWithEmail) {
            return res.status(400).json("Email or Password is incorrect");
        } else {
            if (userWithEmail.password !== undefined) {
                const isPasswordCorrect = await bcrypt.compare(password, userWithEmail.password);
                if (isPasswordCorrect) {
                    const userForToken = { ...userWithEmail.toObject(), password: undefined };
                    const token = jwt.sign(userForToken, process.env.JWT_SECRET!);
                    res.json({ token, ...userForToken });
            }
            } else {
                res.status(400).json("Email or Password is incorrect");
            }
        }
    });

    authRouter.post("/change-password", checkToken, async (req: Request, res: Response) => {
        const { currentPassword, passwordConfirmation, password } = req.body;
        if (passwordConfirmation !== password) {
            return res.status(400).json("New passwords do not match");
        } else if (passwordConfirmation.length < 6) {
            return res.status(400).json("New password must be at least 6 characters long");
        } else {
            const decoded = jwt.decode(req.token!) as any; // Remplacer par votre type de décodage
            const user = await UserModel.findById(decoded.id);
            if (!user) {
                return res.status(404).json("User not found");
            }
    
            // Vérifiez si le mot de passe de l'utilisateur n'est pas undefined
            if (user.password) {
                const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
                if (isPasswordCorrect) {
                    const hashedPassword = await bcrypt.hash(passwordConfirmation, parseInt(process.env.SALT_ROUNDS!));
                    user.password = hashedPassword;
                    await user.save();
                    res.json("Password changed");
                } else {
                    res.status(400).json("Current password is incorrect");
                }
            } else {
                // Gérer le cas où le mot de passe est undefined
                res.status(500).json("An error occurred");
            }
        }
    });
    

    authRouter.post("/logout", checkToken, async (req : Request, res : Response) => {
        const decoded = jwt.decode(req.token!) as any; // Remplacer par votre type de décodage
        const user = await UserModel.findById(decoded.id);
        if (user) {
            await TokenBlackListModel.create({ token: req.token });
            res.json("Logged out");
        } else {
            res.status(404).json("User not found");
        }
    });
