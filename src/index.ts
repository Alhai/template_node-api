import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { authRouter } from "./router/auth-router";
import { userRouter } from "./router/user-router";


// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'Erreur de connexion MongoDB:'));

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration des routeurs
const apiRouter = express.Router();
apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);

app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Serveur lancé sur le port ${process.env.PORT}!`)
});
