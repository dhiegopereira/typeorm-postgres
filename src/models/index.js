const Knex = require('knex');

const knex = new Knex({
    client: 'pg',
    version: '7.2',
    connection: {
        host : '127.0.0.1', 
        port : 5432, 
        user : 'postgres', 
        password : 'postgres', 
        database : 'chat' 
    }
  });

// models
const User = knex.import('src/models/user')

module.exports = {
    knex,
    models: {
        User
    }
}