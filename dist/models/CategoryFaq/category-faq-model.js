"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFaqModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const categoryFaqSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
});
exports.CategoryFaqModel = mongoose_1.default.model('CategoryFaq', categoryFaqSchema);
