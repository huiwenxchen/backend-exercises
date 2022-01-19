const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const user_pets = await User.query().withGraphFetched('pets')
  console.log(user_pets)
  // Get all users, their pets, AND their children
  const pets_children = await User.query().withGraphFetched('[pets, children]')
  console.log(pets_children)
  // Get all users, their parents, and their grandparents
  const fam_info = await User.query().withGraphFetched('parent.^2')
  console.log(fam_info)
  // Get all users, their pets, their chilren, and their childrens' pets
  const allInfo = await User.query().withGraphFetched('[pets, children, children.pets]')
  console.log(allInfo)
  // -----
  cleanup()
}

run()
