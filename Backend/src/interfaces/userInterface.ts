import mongoose from 'mongoose';

export interface IUser extends mongoose.Document{
    name : string;
    email : string;
    password : string;
    phone ?: string;
    role ?: string;
    blocked ?: boolean;
    totalAmountDonated ?: number;
    donations ?: mongoose.Types.ObjectId;
    fundraisers ?: mongoose.Types.ObjectId;
    createdAt ?: Date;
    updatedAt ?: Date;
};