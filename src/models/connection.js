// data base connection

const knex = require('knex') ({
    user: 'postgres',
    host: 'localhost',
    database: 'aluga_car_db',
    password: 'postgres',
    port: '5432'
});

module.exports = knex;