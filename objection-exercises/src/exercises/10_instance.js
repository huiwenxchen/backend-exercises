const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const get_user = await User.query().findById('559512a3-f4d7-407b-81cf-8bae6342c40a')
  console.log(get_user)
  // Use that instance to create a new pet related that user
  const new_pet = await get_user.$relatedQuery('pets')
    .insert({
      ownerId: '559512a3-f4d7-407b-81cf-8bae6342c40a',
      type: 'FISH',
      name: 'fishball',
    })
  console.log(new_pet)
  // Use that instance to get all of the user's pets and children
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const user_info = await get_user.$fetchGraph('[pets, children]')
  console.log(user_info)
  // -----
  cleanup()
}

run()
