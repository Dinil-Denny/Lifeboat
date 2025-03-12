import mongoose from 'mongoose';

export interface IOtp extends mongoose.Document {
  email: string;
  otp: string;
  createdAt?: Date;
  updatedAt?: Date;
  expiresAt?: Date;
}
