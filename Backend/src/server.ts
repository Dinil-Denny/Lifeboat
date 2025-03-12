import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from '../src/routes/userRoutes.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//error middleware
app.use(errorMiddleware);

app.use('/', userRoutes);

// app.get('/', (req, res) => {
//   res.send('home');
// });

const port: number | string = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running at ${port}`));
