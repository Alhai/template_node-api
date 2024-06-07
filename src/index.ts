import { authRouter } from './routers/auth-router';
import bodyParser from 'body-parser';
import { categoryFaqRouter } from './routers/category-faq.router';
import dotenv from 'dotenv';
import express from 'express';
import { faqRouter } from './routers/faq-router';
import mongoose from 'mongoose';
import { userRouter } from './routers/user-router';

dotenv.config();
var cors = require('cors')
const app = express();
const port = Number(process.env.PORT) || 1337;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server running on port ${port}`);
    });
  }).catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.options('*', cors())
app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/faq', faqRouter);
app.use('/faq', faqRouter);
app.use('/category', categoryFaqRouter);
