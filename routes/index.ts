import { Router } from "express";
import userRouter from "./user.route";




const routeHandler = Router();

routeHandler.use("/user", userRouter);


export default routeHandler