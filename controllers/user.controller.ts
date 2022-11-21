import UserService from "../services/user.service";
import { Request, Response } from "express";


class UserController {
    private readonly _service: UserService;

    constructor(service: UserService) {
        this._service = service;
    }

    async create(req: Request, res: Response) {
        try {
            const user = await this._service.create(req.body);

            res.status(200).json(user);
        } catch (err) {
            console.log(err)
        }
    }
}

export default UserController;