import UserService, { Hello } from "../services/user.service";
import { Request, Response } from "express";

// interface MulterRequest extends Request {
//     files: string;
// }

class UserController {
    private readonly _service: UserService;

    constructor(service: UserService) {
        this._service = service;
    }

    async create(req: Request<{}, {}, Hello, {}>, res: Response) {
        try {
            const user = await this._service.create(req.body);
            const h = (req).file



            res.status(200).json(user);
        } catch (err) {
            console.log(err)
        }
    }
}

export default UserController;