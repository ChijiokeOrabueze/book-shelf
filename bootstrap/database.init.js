const Sequelize = require('sequelize');
const pg = require('pg');

module.exports.init = function(callback) {
    const dbName = 'db_name',
        username = 'postgres',
        password = 'password',
        host = 'localhost'

    const conStringPri = 'postgres://' + username + ':' + password + '@' + host + '/postgres';
    const conStringPost = 'postgres://' + username + ':' + password + '@' + host + '/' + dbName;

    // connect to postgres db
    pg.connect(conStringPri, function(err, client, done) { 
        // create the db and ignore any errors, for example if it already exists.
        client.query('CREATE DATABASE ' + dbName, function(err) {
            //db should exist now, initialize Sequelize
            const sequelize = new Sequelize(conStringPost);
            callback(sequelize);
            client.end(); // close the connection
        });
    });
};