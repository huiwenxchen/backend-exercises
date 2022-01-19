
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('user')
        .notNullable()
        .references('users.id')

    table
        .text('content')
        .notNullable()

    table
        .integer('likes')

    table
        .timestamp('timeStamp')
        .defaultTo(knex.fn.now())
        .notNullable()
 
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
