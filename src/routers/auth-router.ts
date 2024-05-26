// src/routers/authRouter.ts
import { Request, Response, Router } from 'express';

import { UserModel } from '../models/Users/user-model';
import bcrypt from 'bcryptjs';
import { checkToken } from '../middlewares/checkToken';
import jwt from 'jsonwebtoken';

export const authRouter = Router();

authRouter.post('/register', async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS!));
        const newUser = await UserModel.create({ username, password: hashedPassword, email });
        newUser.password = undefined;
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

authRouter.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json('Invalid email or password');
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password!);
        if (!isPasswordCorrect) {
            return res.status(400).json('Invalid email or password');
        }

        const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

authRouter.post('/change-password', checkToken, async (req: Request, res: Response) => {
    const { currentPassword, newPassword, newPasswordConfirmation } = req.body;
    if (newPassword !== newPasswordConfirmation) {
        return res.status(400).json('New passwords do not match');
    }

    try {
        const user = await UserModel.findById(req.user!.id);
        if (!user) {
            return res.status(404).json('User not found');
        }

        const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password!);
        if (!isPasswordCorrect) {
            return res.status(400).json('Current password is incorrect');
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, parseInt(process.env.SALT_ROUNDS!));
        user.password = hashedNewPassword;
        await user.save();
        res.json('Password changed');
    } catch (error) {
        res.status(500).json({ message: 'Error changing password', error });
    }
});

authRouter.post('/logout', checkToken, async (req: Request, res: Response) => {
    res.json('Logged out');
});
