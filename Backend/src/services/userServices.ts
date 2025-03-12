import { UserRepository } from '../repositories/userRepository.js';
import { IUser } from '../interfaces/userInterface.js';
import { generateOtp } from '../utils/generateOTP.js';
import { IcreateUserDTO } from '../interfaces/DTOInterfaces/CreateUserInterface.js';

export class UserServices {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(userDetails: IcreateUserDTO): Promise<IUser | null> {
    const { name, email, password } = userDetails;
    try {
      let userExists = await this.userRepository.findByEmail(email);
      if (userExists) {
        throw new Error('Email already registered');
      }
      let otp: string = generateOtp();
      console.log('otp: ', otp);

      //converting the user details into a single object of type IUser
      let userDetails: Partial<IUser> = { name, email, password };
      return await this.userRepository.createUser(userDetails);
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error while creating user: ', error.message);
        throw error;
      } else {
        throw new Error('An error occured while creating the user');
      }
    }
  }
}
