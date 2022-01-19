const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet =require('../models/Pet')

const run = (async () => {
  // Write Queries and Logs Here !!!
  const allUsers = await User.query()
  console.log(allUsers)

  // Get all pets
  const allPets = await Pet.query()
  console.log(allPets)

  // Get users with pets
  const usersWithPets = await User.query().withGraphFetched('pets')
  console.log(usersWithPets)

  // Get the name and age of all users
  // const users_name_age = await User.query().select('fullName', 'age')
  // console.log(users_name_age)


  const name_age_users = await User.query().select('firstName','lastName','age')
  console.log(name_age_users)
  // ------
  cleanup()
})

run()
