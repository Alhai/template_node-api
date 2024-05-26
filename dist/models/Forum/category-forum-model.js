"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryForumCollection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const categoryForumSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String },
    avatar: { type: String }
});
exports.CategoryForumCollection = mongoose_1.default.model('categoryForum', categoryForumSchema);
