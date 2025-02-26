import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('home');
})

const port :number|string = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server running at ${port}`));