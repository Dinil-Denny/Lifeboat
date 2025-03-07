import {Router} from "express";
import { UserControllers } from "../controllers/userControllers.js";
import { UserServices } from "../services/userServices.js";
import { UserRepository } from "../repositories/userRepository.js";

const userRepository = new UserRepository();
const userServices = new UserServices(userRepository);
const userControllers = new UserControllers(userServices);
const router = Router();

router.post('/get-otp',userControllers.getOtp);
router.post('/verify-otp',userControllers.verifyOtp);

export default router;