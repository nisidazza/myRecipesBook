const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getListRecipes(db=connection) {
    return db('recipes')
    .select('title')
}



module.exports = {
    getListRecipes
}