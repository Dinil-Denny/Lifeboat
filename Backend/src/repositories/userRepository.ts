//repositories control the CRUD operations or database access logic
import { Users } from '../models/userSchema.js'; //user schema
import { IUser } from '../interfaces/userInterface.js'; //user interface

export class UserRepository {
  //creating a new user in db Users collection
  async createUser(user: Partial<IUser>): Promise<IUser | null> {
    try {
      console.log('5');
      const newUser = new Users(user);
      console.log('6');
      return await newUser.save();
    } catch (error) {
      console.log('Error while creating user: ', error);
      throw new Error(`Failed to create new user`);
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
}
