import { UserRepository } from '../repositories/userRepository.js';
import { IUser } from '../interfaces/userInterface.js';
import { generateOtp } from '../utils/generateOTP.js';
import { IcreateUserDTO } from '../interfaces/DTOInterfaces/CreateUserInterface.js';
import { ApiError } from '../middlewares/errorMiddleware.js';
import { HttpStatus } from '../utils/responseCodes.js';
import sendEmail from '../utils/sendEmail.js';
import { IOtp } from '../interfaces/otpInterface.js';
import { ObjectId } from 'mongoose';
import bcrypt from 'bcryptjs';

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
          'User creation failed',
        );
      }
      //checking if already otp exist for the user
      let otpExists = await this.userRepository.checkOtp(user.email);
      if (otpExists) {
        await this.userRepository.deleteOtp(user.email);
      }

      let otpDetails: Partial<IOtp> = {
        email: user.email,
        otp: otp,
        expiresAt: new Date(Date.now() + 1 * 60 * 1000),
      };
      const newOtp = await this.userRepository.createOtp(otpDetails);
      console.log('newOpt:', newOtp);

      return user;
    } catch (error: any) {
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
}
