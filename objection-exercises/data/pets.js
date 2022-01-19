const casual = require('casual')
const userData = require('./users')

casual.define('pet', ownerId => ({
  id: casual.uuid,
  ownerId,
  type: casual.random_element(['DOG', 'CAT', 'BIRD', 'FISH', 'ALLIGATOR']),
  name: casual.first_name,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const pets = []

for (let i = 0; i < 10; ++i) {
  const ownerId = casual.random_element(userData).id
  pets.push(casual.pet(ownerId))
}

module.exports = pets
