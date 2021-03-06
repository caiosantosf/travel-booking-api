
exports.up = function(knex) {
  return knex.schema.alterTable('travels', (table) => {
    table.integer('days').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('days')
  })
}
