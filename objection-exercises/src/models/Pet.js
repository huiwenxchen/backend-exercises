// Write your Pet model here!
const { BelongsToOneRelation, Model } = require('objection')
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
    static get tableName() {
      return 'pets'
    }
  
	// require other models INSIDE the relation method
  static get relationMappings() {
    const User = require('./User')

    return {
        user: {
            relation: BelongsToOneRelation,
            modelClass: User,
            join: {
                from:'pets.ownerId',
                to: 'users.id',
            },
        },
    }

}


}

module.exports = Pet