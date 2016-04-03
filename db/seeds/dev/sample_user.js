
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('Users').del(),
    knex('Users').insert({ first_name: 'John', last_name: 'Doe' })
  );
};
