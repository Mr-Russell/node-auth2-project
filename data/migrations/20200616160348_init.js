
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 100)
        .notNullable()
        .unique();
      tbl.string('password', 260)
        .notNullable();
      tbl.string('department', 100)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};
