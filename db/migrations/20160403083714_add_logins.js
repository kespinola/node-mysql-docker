exports.up = function(knex) {
  return knex.schema
    .createTable('Logins', function(table) {
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').nullable();
      table.foreign('user_id').reference('id').inTable('Users');
      table.string('password_hash');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Logins');
};
