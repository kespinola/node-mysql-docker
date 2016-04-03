exports.up = function(knex) {
  return knex.schema
    .createTable('Users', function (table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.string('first_name');
      table.string('last_name');
      table.string('email');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Users');
};
