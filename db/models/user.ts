'use strict';

import {
  Model, Sequelize, 
  DataTypes, InferAttributes, 
  InferCreationAttributes, ModelStatic,
  Attributes,
  Association} from 'sequelize';

import db from "./index"




export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {

    declare firstName: string;
    declare lastName: string;
    declare email: string;
    
    /**seq
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   
    // declare static associate(models: ModelStatic<Model>[]) {

    //   // models[0].ha
    //   // define association here
      
    // }

  }

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize: db.sequelize,
    modelName: 'User',
  });

  console.log("hello")
  export interface t extends Attributes<User> {
  }

  const h: t = {
    firstName: "hhdh",
    lastName: 'hdhdgh',
    email: "jhhdfh"
  }

  new User();
