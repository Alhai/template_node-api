"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commentSchema = new mongoose_1.default.Schema({
    content: { type: String, required: true },
    authorId: { type: String, required: true },
    postId: { type: String, required: true },
    creationDate: { type: Date }
});
exports.UserModel = mongoose_1.default.model('Comment', commentSchema);
