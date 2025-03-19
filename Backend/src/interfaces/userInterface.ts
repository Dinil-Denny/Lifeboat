import mongoose, { ObjectId } from 'mongoose';

export interface IUser extends mongoose.Document {
  _id: ObjectId;
  userName: string;
  email: string;
  password: string;
  phone?: string;
  role?: string;
  blocked?: boolean;
  totalAmountDonated?: number;
  donations?: mongoose.Types.ObjectId;
  fundraisers?: mongoose.Types.ObjectId;
  isVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
