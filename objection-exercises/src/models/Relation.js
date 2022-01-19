// Write your relation model here!
const { BelongsToOneRelation} = require('objection')
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
    static get tableName(){
        return 'relations'
    }

    static get relationMappings() {
        const User = require('./User')

        return {
            child: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'relations.childId',
                    to: 'users.id',
                },
            parent: {
                relation: BelongsToOneRelation,
                modelClss: User,
                join: {
                    from: 'relations.parentId',
                    to: 'users.id'
                }
            }
            }

        }
    }
}

module.exports = Relation