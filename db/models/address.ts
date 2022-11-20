'use strict';

import {
  Model, Sequelize, 
  DataTypes, InferAttributes, 
  InferCreationAttributes, ModelStatic,
  Attributes,
  Association,
  ForeignKey} from 'sequelize';

import db from "./index"
import User from './user';




export default class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {

    declare street: string;
    declare userId: ForeignKey<User>

    }

  Address.init({
    street: DataTypes.STRING
  }, {
    sequelize: db.sequelize,
    modelName: 'Address',
  });


              export interface t extends Attributes<Address> {
  }


Address.belongsTo(User, { targetKey: 'id' });
User.hasOne(Address, { sourceKey: 'id' });