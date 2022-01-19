
exports.up = async knex => knex.schema.createTable('messages', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('sender')
        .notNullable()
        .references('users.id')

    table
        .uuid('receiver')
        .notNullable()
        .references('users.id')

    table
        .text('message')

    table
        .timestamp('timeStamp')
        .defaultTo(knex.fn.now())
        .notNullable()

    table
        .enum('status', ['delivered', 'read', 'unread', 'not delivered'])
        .notNullable()
    
})

exports.down = async knex => knex.schema.dropTableIfExists('messages')
