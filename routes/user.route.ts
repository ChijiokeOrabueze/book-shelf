import { NextFunction, Request, Response, Router } from 'express';
import UserController from '../controllers/user.controller';
import validate from '../middlewares/validators/shared';
import { createUserSchema } from '../middlewares/validators/userSchema';
import UserRepository from '../repositories/userRepository';
import UserService from '../services/user.service';


const userRouter = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService)


userRouter.route("/")
    .post(
        validate(createUserSchema),
        // (req:Request & {files: string}, res:Response, next:NextFunction) => {
        //     next()
        // },
        userController.create
    )


export default userRouter;