const BaseModel = require('./BaseModel')
const {HasManyRelation, ManyToManyRelation} = require('objection')

class User extends BaseModel {

  static get virtualAttributes() {
    return ['fullName', 'theAge']
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }
  get theAge(){
    return this.age >=50
  }

  static get tableName() {
    return 'users'
  }

  static get relationMappings() {

    const Pet = require('./Pet')


    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        }
      },

      parents: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId',
          },
          to: 'users.id',
        }
      },

      children: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'user.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId',
          },
          to: 'users.id',
        },

      }
    }
  }
}

module.exports = User


