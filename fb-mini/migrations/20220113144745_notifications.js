
exports.up = async knex => knex.schema.createTable('notifications', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('user1')
        .notNullable()
        .references('users.id')

    table
        .uuid('user2')
        .notNullable()
        .references('users.id')

    table
        .text('message')
        .notNullable()

    table
        .enum('status', ['read', 'unread'])
        .notNullable()
 
})

exports.down = async knex => knex.schema.dropTableIfExists('notifications')
