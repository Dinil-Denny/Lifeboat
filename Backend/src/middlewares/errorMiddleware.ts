import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '../utils/responseCodes.js';

export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error('Error occured: ', err.message);

  res.status(err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || 'internal server error',
  });
};
