const relationsData = require('../../../data/relations')

exports.seed = knex => knex('relations').del()
  .then(() => knex('relations').insert(relationsData))
