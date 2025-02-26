import mongoose from "mongoose";
import { Users } from "./userSchema.js";

export interface IOtp extends mongoose.Document{
    userId : mongoose.Types.ObjectId;
    otp : string;
    createdAt : Date;
    updatedAt : Date;
    expiresAt : Date; 
};

const otpSchema = new mongoose.Schema<IOtp>(
    {
        userId : {type : mongoose.Schema.Types.ObjectId,ref : Users , required : true},
        otp : {type : String, required : true},
        expiresAt : {type : Date, required : true}
    },
    {timestamps : true}
);

//using TTL index we can automatically delete expired otp after a time period
otpSchema.index({createdAt : 1},{expireAfterSeconds : 300}) //otp will expire after 5 minutes

export const OTP = mongoose.model<IOtp>('OTP',otpSchema);