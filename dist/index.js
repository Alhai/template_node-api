"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_router_1 = require("./router/auth-router");
const user_router_1 = require("./router/user-router");
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose_1.default.connection.on('error', console.error.bind(console, 'Erreur de connexion MongoDB:'));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Configuration des routeurs
const apiRouter = express_1.default.Router();
apiRouter.use('/auth', auth_router_1.authRouter);
apiRouter.use('/users', user_router_1.userRouter);
app.use("/api", apiRouter);
app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}!`);
});
