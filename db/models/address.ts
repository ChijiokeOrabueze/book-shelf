import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Attributes,
    ForeignKey,
    CreationAttributes,
    CreationOptional,
} from 'sequelize';

import db from './index';
import User from './user';

class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {

    declare id: CreationOptional<number>;
    declare street: string;
    declare userId: ForeignKey<User['id']>;
}

Address.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: db.sequelize,
        modelName: 'Address',
    },
);

Address.belongsTo(User, { targetKey: 'id' });
User.hasOne(Address, { sourceKey: 'id' });

export type AddressDto = CreationAttributes<Address>;
export type AddressDro = Attributes<Address>;


export default Address;
