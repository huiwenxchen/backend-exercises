
exports.up = knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table.string('firstName').notNullable()

  table.string('lastName').notNullable()

  table.integer('age')

  table.timestamps(true)
})

exports.down = knex => knex.schema.dropTableIfExists('users')
