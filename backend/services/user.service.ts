import User, { UserDto } from "../db/models/user";
import UserRepository from "../repositories/userRepository";

export interface Hello extends Omit<UserDto, "id"> {

}

interface IUserService {
    create: (data: Hello) => Promise<User>;
}


class UserService implements IUserService {

    private readonly userRepository: UserRepository;

    constructor(repository: UserRepository) {
        this.userRepository = repository;

    }



    async create(data: Hello) {

        try {
            const result = await this.userRepository.create(data);

            return result;

        } catch (err) {
            throw err
        }



    }




}

export default UserService;