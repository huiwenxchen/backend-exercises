const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')


const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const user_name = await User.query().select().where('firstName', 'Ian')
  console.log(user_name)
  // Do the same with object notation
  const user_name2 = await User.query().where({firstName: 'Ian'})
  console.log(user_name2)
  // Get all DOGS and BIRDS
  const all_dogs_birds = await Pet.query().select().where({type:'BIRD'}).orWhere({type:'DOG'})
  console.log(all_dogs_birds)
  
  // -----
  cleanup()
}

run()
