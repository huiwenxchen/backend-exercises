const { Model, snakeCaseMappers } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)


class BaseModel extends Model {
    // async $beforeInsert(queryContext) {
    //   await super.$beforeInsert(queryContext);
    //   this.created_at = new Date()
    // }
    
    // async $beforeUpdate(opt, queryContext) {
    //   await super.$beforeUpdate(opt, queryContext);
    //   this.updated_at = new Date()
  
    // }
  }

module.exports = BaseModel
