//repositories control the CRUD operations or database access logic
import { Users } from '../models/userSchema.js'; //user schema
import { OTP } from '../models/otpSchema.js';
import { IUser } from '../interfaces/userInterface.js'; //user interface
import { IOtp } from '../interfaces/otpInterface.js';
import { ObjectId } from 'mongoose';

export class UserRepository {
  //creating a new user in db Users collection
  async createUser(user: Partial<IUser>): Promise<IUser | null> {
    try {
      const newUser = new Users(user);
      return await newUser.save();
    } catch (error) {
      console.log('Error while creating user: ', error);
      throw new Error(`Failed to create new user`);
    }
  }
  //updating user verified
  async updateUserVerified(userId : ObjectId) : Promise<void> {
    try {
      await Users.findByIdAndUpdate(userId,{isVerified:true});
    } catch (error) {
      
    }
  }
  //checking if an email is already registered with a user
  async findByEmail(email: string): Promise<IUser | null> {
    try {
      return await Users.findOne({ email: email });
    } catch (error) {
      if (error instanceof Error) {
        console.log('Unknown error while creating user: ', error.message);
        throw error;
      } else {
        throw new Error('Error while fetching user using email');
      }
    }
  }
  //finding a user using id
  async findById(id: string): Promise<IUser | null> {
    try {
      return await Users.findById(id);
    } catch (error) {
      if (error instanceof Error) {
        console.log('error while fetching user uisng id: ', error.message);
        throw error;
      } else {
        throw new Error('Error while fetching user using id');
      }
    }
  }
  //saving otp
  async createOtp(data:Partial<IOtp>) : Promise<IOtp|null> {
    try {
      const newOtp = new OTP(data);
      return newOtp.save();
    } catch (error) {
      if(error instanceof Error){
        console.log("Error while saving otp:",error.message);
        throw error.message;
      }
      else
        throw new Error("Error while saving otp");
    }
  }
  //checking if otp for a person exist
  async checkOtp(email:string) : Promise<IOtp | null> {
    try {
      return await OTP.findOne({email:email});
    } catch (error) {
      if(error instanceof Error){
        console.log("Error while getting otp details:",error.message);
        throw error.message;
      }else{
        throw new Error("Error while checking otp");
      }
    }
  }
  //deleting otp document
  async deleteOtp(email:string) : Promise<void> {
    try {
      await OTP.deleteOne({email:email});
    } catch (error) {
      if(error instanceof Error){
        console.log("Error while deleting otp",error.message);
        throw error.message;
      }else{
        throw new Error("Error while deleting otp");
      }
    }
  }
}
