import { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";




const routeHandler = Router();


routeHandler.use("/user", userRouter);
routeHandler.use("/auth", authRouter);


export default routeHandler