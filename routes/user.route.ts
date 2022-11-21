import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserRepository from '../repositories/userRepository';
import UserService from '../services/user.service';


const userRouter = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService)


userRouter.route("/")
    .get(
        userController.create
    )