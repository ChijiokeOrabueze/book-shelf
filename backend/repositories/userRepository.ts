import Repo from './repo';
import User from '../db/models/user';



class UserRepository extends Repo<User> {
    constructor() {
        super(User);
    }
}


export default UserRepository;
