import Repo from "./repo";
import db from "../db/models";
import { Model, ModelStatic } from "sequelize";

const y = db.User as Model;
const h = db.sequelize?.models.user as ModelStatic<typeof y>;




class UserRepository extends Repo{

    constructor() {
        super(h)
    }

}