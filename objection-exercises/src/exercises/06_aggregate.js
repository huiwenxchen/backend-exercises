const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const total_num = await User.query().resultSize()
  console.log(total_num)

  // Get the average age of users
  const avg_age = await User.query().avg('age')
  console.log(avg_age)

  // Get the total number of dogs
  const num_dogs = await Pet.query().where({type: 'DOG'}).resultSize()
  console.log(num_dogs)
  // -----
  cleanup()
}

run()
