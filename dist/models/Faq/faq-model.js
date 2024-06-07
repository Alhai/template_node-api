"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqModel = void 0;
// models/Faq/faq-model.ts
const mongoose_1 = __importDefault(require("mongoose"));
const faqSchema = new mongoose_1.default.Schema({
    question: { type: String, required: true },
    response: { type: String, required: true },
});
exports.FaqModel = mongoose_1.default.model('Faq', faqSchema);
