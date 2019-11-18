
exports.up = function(knex) {
   return knex.schema.createTable('users', function(table) {
      table.serial('user_id').notNullable();
      table.string('username').notNullable();
    })};

exports.down = function(knex) { 
   return knex.schema.dropTable('users')
  
};
