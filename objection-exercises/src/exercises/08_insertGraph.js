const casual = require('casual')
const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const Peter_info = await User.query().insert({
    id: casual.uuid,
    email: casual.email,
    age: casual.integer(1, 50),
    firstName: 'Peter',
    lastName: 'Bynum',
    created_at: casual.moment,
    updated_at: casual.moment,
    pets: [
      {
        id: casual.uuid,
        ownerId: this.id,
        type: 'DOG',
        name: 'Rocco',
        created_at: casual.moment,
        updated_at: casual.moment,
      },

      {
        id: casual.uuid,
        ownerId: this.id,
        type: 'DOG',
        name: 'Rosey',
        created_at: casual.moment,
        updated_at: casual.moment,
      }
    ]
  })

  console.log(Peter_info)
  // -----
  cleanup()
}

run()
