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
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const checkToken_1 = require("../middlewares/checkToken");
const user_model_1 = require("../models/Users/user-model");
const tokenBlackList_model_1 = require("../models/BlackListed/tokenBlackList-model");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/local/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    const userWithEmail = yield user_model_1.UserModel.findOne({ email });
    if (userWithEmail) {
        return res.status(400).json("Email already exists");
    }
    else {
        const hashedPassword = yield bcrypt_1.default.hash(password, parseInt(process.env.SALT_ROUNDS));
        const newUser = yield user_model_1.UserModel.create({ username, password: hashedPassword, email });
        newUser.password = undefined;
        res.json(newUser);
    }
}));
exports.authRouter.post("/local", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { identifier, password } = req.body;
    const userWithEmail = yield user_model_1.UserModel.findOne({ email: identifier });
    if (!userWithEmail) {
        return res.status(400).json("Email or Password is incorrect");
    }
    else {
        if (userWithEmail.password !== undefined) {
            const isPasswordCorrect = yield bcrypt_1.default.compare(password, userWithEmail.password);
            if (isPasswordCorrect) {
                const userForToken = Object.assign(Object.assign({}, userWithEmail.toObject()), { password: undefined });
                const token = jsonwebtoken_1.default.sign(userForToken, process.env.JWT_SECRET);
                res.json(Object.assign({ token }, userForToken));
            }
        }
        else {
            res.status(400).json("Email or Password is incorrect");
        }
    }
}));
exports.authRouter.post("/change-password", checkToken_1.checkToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { currentPassword, passwordConfirmation, password } = req.body;
    if (passwordConfirmation !== password) {
        return res.status(400).json("New passwords do not match");
    }
    else if (passwordConfirmation.length < 6) {
        return res.status(400).json("New password must be at least 6 characters long");
    }
    else {
        const decoded = jsonwebtoken_1.default.decode(req.token); // Remplacer par votre type de décodage
        const user = yield user_model_1.UserModel.findById(decoded.id);
        if (!user) {
            return res.status(404).json("User not found");
        }
        // Vérifiez si le mot de passe de l'utilisateur n'est pas undefined
        if (user.password) {
            const isPasswordCorrect = yield bcrypt_1.default.compare(currentPassword, user.password);
            if (isPasswordCorrect) {
                const hashedPassword = yield bcrypt_1.default.hash(passwordConfirmation, parseInt(process.env.SALT_ROUNDS));
                user.password = hashedPassword;
                yield user.save();
                res.json("Password changed");
            }
            else {
                res.status(400).json("Current password is incorrect");
            }
        }
        else {
            // Gérer le cas où le mot de passe est undefined
            res.status(500).json("An error occurred");
        }
    }
}));
exports.authRouter.post("/logout", checkToken_1.checkToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.decode(req.token); // Remplacer par votre type de décodage
    const user = yield user_model_1.UserModel.findById(decoded.id);
    if (user) {
        yield tokenBlackList_model_1.TokenBlackListModel.create({ token: req.token });
        res.json("Logged out");
    }
    else {
        res.status(404).json("User not found");
    }
}));
