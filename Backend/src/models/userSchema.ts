import mongoose from 'mongoose';
import { IUser } from '../interfaces/userInterface.js';


const userSchema = new mongoose.Schema<IUser>(
    {
        name : {type: String, required: true},
        email : {type: String, required: true, unique: true},
        password : {type: String, required: true},
        phone : {type: String, required: false},
        role : {type: String, default: 'user'},
        blocked : {type: Boolean, default: false},
        totalAmountDonated : {type: Number, default:0},
        isVerified : {type: Boolean, default: false},
        //2 more fields to add
        //donations - refering donations schema
        //fundraisers - refering fundraisers schema
    },
    {timestamps : true} //this automatically creates createdAt and updatedAt fields
);

export const Users =  mongoose.model<IUser>('Users',userSchema); 