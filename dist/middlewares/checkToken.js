"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function checkToken(req, res, next) {
    const fullToken = req.headers.authorization;
    if (!fullToken) {
        return res.status(401).send("No token provided");
    }
    const [typeToken, token] = fullToken.split(" ");
    if (typeToken !== "Bearer") {
        return res.status(401).send("Invalid token type");
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.token = token;
        req.user = decoded;
        next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).send("Invalid token");
    }
}
exports.checkToken = checkToken;
