import { UserRepository } from '../repositories/userRepository.js';
import { IUser } from '../interfaces/userInterface.js';
import { generateOtp } from '../utils/generateOTP.js';
import { IcreateUserDTO } from '../interfaces/DTOInterfaces/CreateUserInterface.js';
import { ApiError } from '../middlewares/errorMiddleware.js';
import { HttpStatus } from '../utils/responseCodes.js';

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
      console.log("userExist:",userExists);
      if (userExists) {
        throw new ApiError(HttpStatus.BAD_REQUEST,'Email already registered');
      }
      let otp: string = generateOtp();
      console.log('otp: ', otp);

      //converting the user details into a single object of type IUser
      let userDetails: Partial<IUser> = { userName, email, password };
      console.log('4');
      return await this.userRepository.createUser(userDetails);
    } catch (error:any) {
      if (error instanceof ApiError) {
        console.log('Error while creating user: ', error.message);
        throw error;
      } else {
        throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,'An error occured while creating the user');
      }
    }
  }
}
