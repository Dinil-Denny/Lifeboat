import { UserRepository } from '../repositories/userRepository.js';
import { IUser } from '../interfaces/userInterface.js';
import { generateOtp } from '../utils/generateOTP.js';
import { IcreateUserDTO } from '../interfaces/DTOInterfaces/CreateUserInterface.js';
import { ApiError } from '../middlewares/errorMiddleware.js';
import { HttpStatus } from '../utils/responseCodes.js';
import { IOtp } from '../interfaces/otpInterface.js';
import { ObjectId } from 'mongoose';
import bcrypt from 'bcryptjs';
import sendOTPEmail from '../utils/sendEmail.js';
import { OTP } from '../models/otpSchema.js';

export class UserServices {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(userDetails: IcreateUserDTO): Promise<IUser | null> {
    const { userName, email, password } = userDetails;
    console.log('3');
    try {
      let userExists = await this.userRepository.findByEmail(email);
      console.log('userExist:', userExists);
      if (userExists) {
        throw new ApiError(HttpStatus.BAD_REQUEST, 'Email already registered');
      }
      let otp: string = generateOtp();
      console.log('otp:', otp);
      //converting the user details into a single object of type IUser
      let userDetails: Partial<IUser> = { userName, email, password };
      console.log('4');
      const user = await this.userRepository.createUser(userDetails);
      console.log(user);
      if (!user) {
        throw new ApiError(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'User registration failed',
        );
      }
      //checking if already otp exist for the user
      let otpExists = await this.userRepository.checkOtp(user.email);
      if (otpExists) {
        await this.userRepository.deleteOtp(user.email);
      }
      //saving new otp details
      let otpDetails: Partial<IOtp> = {
        email: user.email,
        otp: otp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      };
      const newOtp = await this.userRepository.createOtp(otpDetails);
      console.log('newOpt:', newOtp);
      await sendOTPEmail(user.email, otp);

      return user;
    } catch (error) {
      if (error instanceof ApiError) {
        console.log('Error while creating user: ', error.message);
        throw error;
      } else {
        throw new ApiError(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'An error occured while creating the user',
        );
      }
    }
  }

  //resend otp
  async resendOtp (email:string) : Promise<void>{
    try{
      console.log('resend otp mail: ',email);
      let otp: string = generateOtp();
      console.log('otp in resend otp',otp);
      //checking if otp with this email is present in the collection
      const otpExists = await this.userRepository.checkOtp(email);
      if(otpExists){
        await this.userRepository.deleteOtp(email);
      };
      //saving new otp details
      let otpDetails : Partial<IOtp> = {
        email : email,
        otp : otp,
        expiresAt : new Date(Date.now() + 5 * 60 * 1000),
      };
      let newOtpDetails = await this.userRepository.createOtp(otpDetails);
      console.log('new otp:',newOtpDetails);
      if(!newOtpDetails){
        throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,'OTP generation failed');
      }
      await sendOTPEmail(email, otp);
    }catch(error){
      if (error instanceof ApiError) {
        console.log('Error while resending OTP: ', error.message);
        throw error;
      } else {
        throw new ApiError(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'An error occured while resending OTP',
        );
      };
    };
  };

  async verifyOtp (otp : string , email : string) : Promise<void> {
    try {
      const otpExist = await this.userRepository.checkOtp(email);
      console.log("otpExist: ",otpExist);
      if(!otpExist){
        throw new ApiError(HttpStatus.BAD_REQUEST,"OTP does not exist");
      };
      const match : boolean = await bcrypt.compare(otp,otpExist.otp);
      if(!match){
        throw new ApiError(HttpStatus.BAD_REQUEST,"Invalid OTP");
      };
      const user = await this.userRepository.findByEmail(email);
      if(user){
        await this.userRepository.updateUserVerified(user._id);
      }
    } catch (error) {
      if (error instanceof ApiError) {
        console.log('Error while verifying OTP: ', error.message);
        throw error;
      } else {
        throw new ApiError(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'An error occured while verifying OTP',
        );
      };
    }
  }
}
