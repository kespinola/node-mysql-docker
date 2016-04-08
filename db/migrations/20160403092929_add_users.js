exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (user) {
      user.increments('id').primary();
      user.timestamp('created_at').defaultTo(knex.fn.now());
      user.string('first_name');
      user.string('last_name');
    })
    .then(function () {
      return knex.schema
        .createTable('logins', function (login) {
          login.increments('id').primary();
          login.timestamp('created_at').defaultTo(knex.fn.now());
          login.timestamp('updated_at').nullable();
          login.integer('user_id').unsigned().references('users.id').onDelete('CASCADE');
          login.string('email').unique();
          login.string('password_hash');
        });
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('logins')
    .then(function () {
      return knex.schema.dropTable('users');
    });
};
