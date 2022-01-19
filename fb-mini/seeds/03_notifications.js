const notificationData = require('../data/notifications')


exports.seed = knex => knex('notifications').del()
    .then(() => knex('notifications').insert(notificationData))