import { authRouter } from './routers/auth-router';
import bodyParser from 'body-parser';
import { categoryFaqRouter } from './routers/category-faq.router';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { faqRouter } from './routers/faq-router';
import mongoose from 'mongoose';
import { userRouter } from './routers/user-router';

dotenv.config();

const app = express();
const port = process.env.PORT || 1337;

mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/faq', faqRouter)
app.use('/category', categoryFaqRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
