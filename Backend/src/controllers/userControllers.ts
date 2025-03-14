import { Request, Response, NextFunction } from 'express';
import { UserServices } from '../services/userServices.js';
import { IUser } from '../interfaces/userInterface.js';
import { HttpStatus } from '../utils/responseCodes.js';
import { ApiError } from '../middlewares/errorMiddleware.js';
import { IcreateUserDTO } from '../interfaces/DTOInterfaces/CreateUserInterface.js';
import { registerValidationSchema } from '../validations/registerValidation.js';

export class UserControllers {
  private userServices: UserServices;

  constructor(userServices: UserServices) {
    this.userServices = userServices;
    //methods may lose its context when passed as a callback in router, so bind 'this' in the constructor
    this.register = this.register.bind(this);
    this.verifyOtp = this.verifyOtp.bind(this);
  }

  async register(req: Request, res: Response, next: NextFunction) {
    console.log('reg controller');
    const { userName, email, password } = req.body;
    console.log('req.body: ', req.body);
    try {
      //user data in req.body validation
      console.log('1');
      await registerValidationSchema.validate(req.body, { abortEarly: false });
      console.log('2');
      let userDetails: IcreateUserDTO = { userName, email, password };
      await this.userServices.createUser(userDetails);
      console.log('lst');
      res
        .status(HttpStatus.CREATED)
        .json({ message: 'user registered successfully' });
    } catch (error: any) {
      //handling validation error
      if (error.name === 'ValidationError') {
        return next(
          new ApiError(
            HttpStatus.BAD_REQUEST,
            error.inner.map((err: any) => ({
              field: err.path,
              message: err.message,
            })),
          ),
        );
      }
      //handling other errors
      next(error);
    }
  }

  async verifyOtp(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(HttpStatus.SUCCESS).json({ message: 'success' });
    } catch (error) {
      next(error);
    }
  }
}
