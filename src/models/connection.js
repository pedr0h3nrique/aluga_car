
const knex = require('knex') ({
    client: 'pg',
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'aluga_car_db',
        password: 'postgres',
        port: '5432'
    }    
});

module.exports = knex;
