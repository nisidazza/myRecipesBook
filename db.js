const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getListRecipes(db=connection) {
    return db('recipes')
    .select()
}

function getRecipe(id, db=connection) {
    return db('recipes')
    .where('id',id)
    .first()
}



module.exports = {
    getListRecipes,
    getRecipe
}