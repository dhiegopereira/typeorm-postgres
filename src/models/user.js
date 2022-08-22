const User = (knex) => {    
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('email');
        table.string('password');
    })
}

module.exports = User