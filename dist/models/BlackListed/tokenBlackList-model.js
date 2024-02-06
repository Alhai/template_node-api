"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBlackListModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schéma Mongoose pour TokenBlackList
const tokenBlackListSchema = new mongoose_1.default.Schema({
    token: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Ajoute automatiquement les champs createdAt et updatedAt
});
// Création du modèle
exports.TokenBlackListModel = mongoose_1.default.model('TokenBlackList', tokenBlackListSchema);
