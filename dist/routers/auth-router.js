"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
// src/routers/authRouter.ts
const express_1 = require("express");
const user_model_1 = require("../models/Users/user-model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const checkToken_1 = require("../middlewares/checkToken");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    try {
        const existingUser = yield user_model_1.UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json('Email already exists');
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, parseInt(process.env.SALT_ROUNDS));
        const newUser = yield user_model_1.UserModel.create({ username, password: hashedPassword, email });
        newUser.password = undefined;
        res.json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}));
exports.authRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_model_1.UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json('Invalid email or password');
        }
        const isPasswordCorrect = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json('Invalid email or password');
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, username: user.username, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}));
exports.authRouter.post('/change-password', checkToken_1.checkToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { currentPassword, newPassword, newPasswordConfirmation } = req.body;
    if (newPassword !== newPasswordConfirmation) {
        return res.status(400).json('New passwords do not match');
    }
    try {
        const user = yield user_model_1.UserModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json('User not found');
        }
        const isPasswordCorrect = yield bcryptjs_1.default.compare(currentPassword, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json('Current password is incorrect');
        }
        const hashedNewPassword = yield bcryptjs_1.default.hash(newPassword, parseInt(process.env.SALT_ROUNDS));
        user.password = hashedNewPassword;
        yield user.save();
        res.json('Password changed');
    }
    catch (error) {
        res.status(500).json({ message: 'Error changing password', error });
    }
}));
exports.authRouter.post('/logout', checkToken_1.checkToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json('Logged out');
}));
