const messageData = require('../data/messages')


exports.seed = knex => knex('messages').del()
    .then(() => knex('messages').insert(messageData))