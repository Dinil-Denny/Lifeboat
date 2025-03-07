import mongoose from "mongoose";
import { Users } from "./userSchema.js";
import { IOtp } from "../interfaces/otpInterface.js";
import bcrypt from "bcryptjs";

const otpSchema = new mongoose.Schema<IOtp>(
    {
        email : {type : String, required : true},
        otp : {type : String, required : true},
        expiresAt : {type : Date, required : true}
    },
    {timestamps : true}
);

//hashing otp before saving - a mongoose middleware to hash the otp
otpSchema.pre("save",async function(next) {
    if(this.isModified("otp")){
        const salt = await bcrypt.genSalt(10);
        this.otp = await bcrypt.hash(this.otp,salt);
    };
    next();
});

//using TTL index we can automatically delete expired otp after a time period
otpSchema.index({expiresAt : 1},{expireAfterSeconds : 0}) //otp will expire after 0 minutes of epriresAt time, ie delete immediatly after reaching expriy time

export const OTP = mongoose.model<IOtp>('OTP',otpSchema);