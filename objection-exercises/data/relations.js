const casual = require('casual')
const userData = require('./users')

casual.define('relation', ({ parentId, childId }) => ({
  id: casual.uuid,
  parentId,
  childId,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const friends = []

for (let i = 0; i < 30; ++i) {
  const parentId = casual.random_element(userData).id
  let childId = null

  do {
    childId = casual.random_element(userData).id
  } while (parentId === childId)

  friends.push(casual.relation({ parentId, childId }))
}

module.exports = friends
