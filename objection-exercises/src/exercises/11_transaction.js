const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const casual = require('casual')
const Pet = require('../models/Pet')
// Import models

  const run = async () => {
    /**
      Create a transaction. It should (without using insertGraph): create a new
      user with returning(), give that user a pet, and fetch the total number of
      pets. If that total number exceeds 15, it should delete all BIRDS. Test
      the transaction by throwing an error: throw new Error("This is an error").
    */
    
  const transaction = await User.transaction(async trx => {
    const addUser = await User.query(trx)
      .insert({
        id: casual.uuid,
        email: casual.email,
        age: casual.integer(1, 50),
        firstName: 'New',
        lastName: 'User',
        created_at: casual.moment,
        updated_at: casual.moment,
      }).returning("*")

      // console.log(addUser)

      const addPet = await addUser.$relatedQuery('pets', trx)
        .insert({
          id: casual.uuid,
          ownerId: addUser.id,
          type: 'DOG',
          name: 'newDog',
          created_at: casual.moment,
          updated_at: casual.moment,
        }).returning("*")

      // console.log(addPet)

      const total_pets = await Pet.query().resultSize()
      if (total_pets > 15){
        const deleteBirds = await Pet.query().delete().where('type', 'BIRD').returning("*")
        // console.log(deleteBirds)
      }
      // console.log(total_pets)

      return addUser
    
  })  


    // -----
    cleanup()
    return transaction

  }




run()
