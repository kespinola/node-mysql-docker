
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('users').insert({ first_name: 'John', last_name: 'Doe' })
  );
};
