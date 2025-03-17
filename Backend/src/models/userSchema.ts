import mongoose from 'mongoose';
import { IUser } from '../interfaces/userInterface.js';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema<IUser>(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    role: { type: String, default: 'user' },
    blocked: { type: Boolean, default: false },
    totalAmountDonated: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
    //2 more fields to add
    //donations - refering donations schema
    //fundraisers - refering fundraisers schema
  },
  { timestamps: true }, //this automatically creates createdAt and updatedAt fields
);

//hashing password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

export const Users = mongoose.model<IUser>('Users', userSchema);
