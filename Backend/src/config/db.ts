import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';

const connectDB = async() => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log('DB connected');
    }catch(err){
        console.log('error in connection to DB: ',err);
        process.exit(1);
    }
};

export default connectDB;