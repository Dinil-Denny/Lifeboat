import mongoose from 'mongoose';

export interface IUser extends mongoose.Document{
    name : string;
    email : string;
    password : string;
    phone ?: string;
    role : string;
    blocked : boolean;
    totalAmountDonated : number;
    donations ?: mongoose.Types.ObjectId;
    fundraisers ?: mongoose.Types.ObjectId;
    createdAt : Date;
    updatedAt : Date;
};

const userSchema = new mongoose.Schema<IUser>(
    {
        name : {type: String, required: true},
        email : {type: String, required: true, unique: true},
        password : {type: String, required: true},
        phone : {type: String, required: false},
        role : {type: String, default: 'user'},
        blocked : {type: Boolean, default: false},
        totalAmountDonated : {type: Number, default:0},
        //2 more fields to add
        //donations
        //fundraisers
    },
    {timestamps : true} //this automatically creates createdAt and updatedAt fields
);

export const Users =  mongoose.model<IUser>('Users',userSchema); 