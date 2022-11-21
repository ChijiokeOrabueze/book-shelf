import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Attributes,
    CreationOptional,
    CreationAttributes,
} from 'sequelize';

import db from './index';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;

    declare firstName: string;

    declare lastName: string;

    declare email: string;

    /** seq
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // declare static associate(models: ModelStatic<Model>[]) {

    //   // models[0].ha
    //   // define association here

    // }
}

User.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
    },
    {
        sequelize: db.sequelize,
        modelName: 'User',
    },
);

console.log('hello');

export type UserDro = Attributes<User>;

export type UserDto = CreationAttributes<User>;

export default User;

