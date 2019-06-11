exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
