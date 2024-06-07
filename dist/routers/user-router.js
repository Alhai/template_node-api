"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_model_1 = require("../models/Users/user-model");
const checkToken_1 = require("../middlewares/checkToken");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/me", checkToken_1.checkToken, async (req, res) => {
    try {
        const decoded = jsonwebtoken_1.default.decode(req.token);
        const user = await user_model_1.UserModel.findById(decoded.id).select('-password');
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).send("User not found");
        }
    }
    catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send("Internal Server Error");
    }
});
