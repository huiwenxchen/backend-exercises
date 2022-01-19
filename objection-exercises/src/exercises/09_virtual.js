const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const virtualTest = await User.query().where('firstName','Huiwen')
  console.log(virtualTest[0].fullName)
  console.log(virtualTest[0].theAge)
  // -----
  cleanup()
}

run()
