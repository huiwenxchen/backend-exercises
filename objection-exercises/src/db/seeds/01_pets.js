const petData = require('../../../data/pets')

exports.seed = knex => knex('pets').del()
  .then(() => knex('pets').insert(petData))
