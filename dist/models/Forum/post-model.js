"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: String, required: true },
    categoryId: { type: String },
    creationDate: { type: String },
    likes: { type: Boolean }
});
exports.UserModel = mongoose_1.default.model('Post', postSchema);
