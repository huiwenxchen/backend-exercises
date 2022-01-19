const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const addUser = await User.query().insert({
    email: 'hchen@college.harvard.edu',
    firstName: 'Huiwen',
    lastName: 'Chen',
    age: 19,
  })
  .returning("*")

  console.log(addUser)
  // Insert a pet belonging to you (get your ID from Postico or DBeaver)

  const addPet = await Pet.query().insert({
    ownerId: '559512a3-f4d7-407b-81cf-8bae6342c40a',
    type: 'FISH',
    name: 'fish',
  })
  .returning("*")

  console.log(addPet)
  // -----
  cleanup()
}

run()
