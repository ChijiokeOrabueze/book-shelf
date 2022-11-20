'use strict';

const fs = require('fs');
const path = require('path');
import { Dialect, Sequelize } from "sequelize";
// const process = require('process');
const basename = path.basename(__filename);
const env: 'development' | 'test' | 'production' = process.env.NODE_ENV as 'development' | 'test' | 'production' || 'development';
import config from '../../config/database';

// console.log(__dirname);
// type Db = {
//   sequelize?: Sequelize;
//   Sequelize?: Sequelize;
// }

// const db:any = {
// };

let sequelize:Sequelize = new Sequelize(
  config[env].database,
  config[env].username, 
  config[env].password,
  {
    dialect: config[env].dialect as Dialect
  });

const db = {
    sequelize,
    Sequelize
  }

// fs
//   .readdirSync(__dirname)
//   .filter((file:string) => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
//   })
//   .forEach((file:string) => {
//     console.log(path.join(__dirname, file));
//     const model = require(path.join(__dirname, file))
//     // import model from 
//     // db[model.name] = model;
//     console.log(db);
//     // console.log(typeof db);
//     console.log(typeof model)
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });



export default db;
