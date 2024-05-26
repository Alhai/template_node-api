"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_router_1 = require("./routers/auth-router");
const body_parser_1 = __importDefault(require("body-parser"));
const category_faq_router_1 = require("./routers/category-faq.router");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const faq_router_1 = require("./routers/faq-router");
const mongoose_1 = __importDefault(require("mongoose"));
const user_router_1 = require("./routers/user-router");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 1337;
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/auth', auth_router_1.authRouter);
app.use('/users', user_router_1.userRouter);
app.use('/faq', faq_router_1.faqRouter);
app.use('/category', category_faq_router_1.categoryFaqRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
