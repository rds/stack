/// @flow

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('Message', (table) => {
      table.increments('id').primary()
      table.string('text')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('Message')
};
